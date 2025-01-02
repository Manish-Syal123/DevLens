import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import React, { Suspense } from "react";
import { AppSidebar } from "./app-sidebar";
// import dynamic from "next/dynamic";
import Loading from "./loading";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
// const Loading = dynamic(() => import("./loading"), { ssr: false });

type Props = {
  children: React.ReactNode;
};
const SidebarLayout = ({ children }: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <SidebarProvider>
        <AppSidebar />
        <main className="m-2 w-full">
          <div className="flex items-center justify-between gap-2 rounded-md border border-sidebar-border bg-sidebar p-2 px-4 shadow">
            {/* <SearchBar/> */}
            <div className="flex w-[40%] items-center shadow-sm">
              <Input
                placeholder="Search here..."
                className="w-full rounded-lg"
              />{" "}
              <Search className="-ml-6 h-4 w-4 shrink-0 opacity-50" />
            </div>
            <div className="ml-auto"></div>
            <UserButton />
          </div>
          <div className="h-4"></div>
          {/* main content */}
          {/* overflow-y-scroll I removed from this right bellow div */}
          <Suspense fallback={<Loading />}>
            <div className="h-[calc(100vh-6rem)] overflow-y-scroll rounded-md border border-sidebar-border bg-sidebar p-4 shadow">
              {children}
            </div>
          </Suspense>
        </main>
      </SidebarProvider>
    </Suspense>
  );
};

export default SidebarLayout;
