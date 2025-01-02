"use client";

import dynamic from "next/dynamic";
// import Lottie from "lottie-react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Link from "next/link";
import notfound from "../../public/notfound.json";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="flex flex-col items-center text-center">
        {/* <h1 className="text-9xl font-black text-gray-200">404</h1> */}
        <Lottie
          animationData={notfound}
          loop={true}
          width="800"
          height="800"
          className="items-center justify-center"
        />
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-lg text-gray-500">
          We can't find that page. Please try again later.
        </p>

        <Link
          href="/dashboard"
          className="mt-6 flex items-center justify-center rounded bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          <ArrowLeftCircle className="mr-3" /> Go Home
        </Link>
      </div>
    </div>
  );
}
