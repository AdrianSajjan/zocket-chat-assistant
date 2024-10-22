import { BookOpen, Bot, Frame, Map, PieChart, Settings2, SquareTerminal } from "lucide-react";
import * as React from "react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { MainNavigation } from "@/layout/sidebar/navigation/main";
import { SessionNavigation } from "@/layout/sidebar/navigation/projects";
import { UserNavigation } from "@/layout/sidebar/navigation/user";

const data = {
  user: {
    name: "Adrian Sajjan",
    email: "adrian@zocket.com",
    avatar: "",
  },
  main: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  sessions: [
    {
      name: "Meta Ads",
      url: "#",
      icon: Frame,
    },
    {
      name: "Google Ads",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Linkedin Ads",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <img src="/zocket.svg" alt="Zocket" className="w-8 h-8" />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Zocket AI</span>
                  <span className="truncate text-xs">Chat Assistant</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNavigation items={data.main} />
        <SessionNavigation sessions={data.sessions} />
      </SidebarContent>
      <SidebarFooter>
        <UserNavigation user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
