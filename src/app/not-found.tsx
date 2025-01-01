"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import notfound from "../../public/notfound.json";
import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="flex flex-col items-center text-center">
        <Lottie
          animationData={notfound}
          loop={true}
          aria-label="404 Not Found Animation"
          className="w-full max-w-md items-center justify-center sm:max-w-lg md:max-w-2xl"
        />

        <p className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 font-sans text-lg text-gray-500">
          We can't find that page. Please try again later.
        </p>

        <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center rounded bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <ArrowLeftCircle className="mr-3" /> Go Back
          </button>

          <Link
            href="/dashboard"
            className="flex items-center justify-center rounded bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <ArrowLeftCircle className="mr-3" /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
