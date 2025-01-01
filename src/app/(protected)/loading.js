"use client";
import Lottie from "lottie-react";
import loadingSpiner from "../../../public/loadingSpiner.json";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="m-auto flex h-screen items-center justify-center">
      <Lottie
        animationData={loadingSpiner}
        loop={true}
        className="h-60 w-60 items-center justify-center lg:h-96 lg:w-96"
      />
    </div>
  );
}
