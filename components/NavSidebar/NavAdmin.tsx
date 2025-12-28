"use client";
import {
  LayoutDashboardIcon,
  LogInIcon,
  LogOutIcon,
  SettingsIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
//import { useSession } from "next-auth/react";
import Link from "next/link";
import NavLink from "./NavLink";
import { cachedAuth } from "@/lib/verifySession";
import { auth } from "@/auth";
import { authClient } from "@/lib/authClient";
//make sure you're using the react client
import { createAuthClient } from "better-auth/react";
export function NavAdmin() {
  const session = authClient.useSession();
  //  const { isMobile } = useSidebar();
  //  const { data: session } = useSession();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Admin</SidebarGroupLabel>

      <SidebarMenu>
        <SidebarMenuItem hidden={session?.data?.user ? false : true}>
          <SidebarMenuButton asChild>
            <NavLink href="/admin">
              <LayoutDashboardIcon />
              Dashboard
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem hidden={session?.data?.user ? false : true}>
          <SidebarMenuButton asChild>
            <NavLink href="/admin/settings">
              <SettingsIcon />
              Settings
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          {session?.data?.user ? (
            <SidebarMenuButton asChild>
              <NavLink href="/admin/signout">
                <LogOutIcon />
                Logout
              </NavLink>
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton asChild>
              <Link href="/admin/signin">
                <LogInIcon />
                Login
              </Link>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
