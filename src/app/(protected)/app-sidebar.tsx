"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import useProject from "@/hooks/use-project";
import { cn } from "@/lib/utils";
import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Plus,
  Presentation,
  Rabbit,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Q&A",
    url: "/qa",
    icon: Bot,
  },
  {
    title: "Meetings",
    url: "/meetings",
    icon: Presentation,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  const { projects, projectId, setProjectId, isLoading } = useProject(); // contains all the projects of logged in user

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          {/* <Image src="/logwithname.png" alt="logo" width={100} height={100} /> */}
          <Image src="/logoSymbol.png" alt="logo" width={55} height={55} />
          {open && (
            <h1 className="text-xl font-bold text-primary/80">DevLens</h1>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Application Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* {isLoading &&
                [1, 2, 3, 4].map((item) => <Skeletonloading key={item} />)} */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <Link
                      href={item.url}
                      className={cn(
                        {
                          "!bg-primary !text-white": pathname === item.url,
                        },
                        "list-none",
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Project Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isLoading &&
                [1, 2, 3, 4].map((item) => <Skeletonloading key={item} />)}
              {projects?.length === 0 && (
                <div className="flex flex-col items-center gap-2">
                  <Rabbit size={50} />
                  <span className="text-lg text-gray-500">
                    No project found
                  </span>
                </div>
              )}
              {projects?.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <div
                      onClick={() => setProjectId(project.id)}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          "flex size-6 items-center justify-center rounded-lg border bg-white text-sm text-primary",
                          {
                            "bg-primary text-white": project.id === projectId,
                          },
                        )}
                      >
                        {project.name[0]}
                      </div>
                      <span>{project.name}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className="h-2"></div>
              {open && (
                <SidebarMenuItem>
                  <Link href="/create">
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      className="w-fit rounded-lg border hover:border-primary"
                    >
                      <Plus />
                      Create Project
                    </Button>
                  </Link>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const Skeletonloading = () => {
  return (
    <div className="my-1.5 flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-36 rounded-lg" />
        <Skeleton className="h-3 w-24 rounded-lg" />
      </div>
    </div>
  );
};
