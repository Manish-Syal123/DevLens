import { db } from "@/server/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

const SyncUser = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not found");
  }
  console.log(userId);
  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  console.log(user);
  if (!user.emailAddresses[0]?.emailAddress) {
    return notFound();
  }

  // storing the user(user details) in the database
  await db.user.upsert({
    //upsert=> if the user exist "update" it's detail. if it doesn't exist then "create" it.
    where: {
      emailAddress: user.emailAddresses[0]?.emailAddress ?? "",
    },
    update: {
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    create: {
      id: userId,
      emailAddress: user.emailAddresses[0]?.emailAddress ?? "",
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  return redirect("/dashboard"); // onece the above code executes, then redirect the user to dashboard. Note: redirect() only works when the page is server side.
};

// export default SyncUser;
export default async function Page() {
  return await SyncUser();
}
