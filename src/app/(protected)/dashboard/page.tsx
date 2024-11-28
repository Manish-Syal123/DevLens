"use client";
import useProject from "@/hooks/use-project";
import { useUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  const { project } = useProject();
  return (
    <div>
      <div>{project?.name}</div>
    </div>
  );
};

export default DashboardPage;
