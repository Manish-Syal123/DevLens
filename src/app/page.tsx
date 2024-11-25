import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <Link href="/dashboard">
      <Button>Dashboard</Button>
    </Link>
  );
}
