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

export async function NavAdmin() {
  const session = await cachedAuth();
  //  const { isMobile } = useSidebar();
  //  const { data: session } = useSession();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Admin</SidebarGroupLabel>

      <SidebarMenu>
        <SidebarMenuItem hidden={session?.user ? false : true}>
          <SidebarMenuButton asChild>
            <NavLink href="/admin">
              <LayoutDashboardIcon />
              Dashboard
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem hidden={session?.user ? false : true}>
          <SidebarMenuButton asChild>
            <NavLink href="/admin/settings">
              <SettingsIcon />
              Settings
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          {session?.user ? (
            <SidebarMenuButton asChild>
              <NavLink href="/api/auth/signout">
                <LogOutIcon />
                Logout
              </NavLink>
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton asChild>
              <Link href="/api/auth/signin">
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
