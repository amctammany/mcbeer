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
import { cachedAuth, verifySession } from "@/lib/verifySession";
import { auth } from "@/auth";
import { authClient } from "@/lib/authClient";
//make sure you're using the react client
import { createAuthClient } from "better-auth/react";
export async function NavBrewery() {
  // const session = authClient.useSession();
  //  const { isMobile } = useSidebar();
  //  const { data: session } = useSession();
  // const session = await verifySession();
  const session = await cachedAuth(); //authClient.useSession();

  const breweryId = session?.user?.defaultBreweryId;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Brewery</SidebarGroupLabel>

      <SidebarMenu>
        <SidebarMenuItem hidden={breweryId ? false : true}>
          <SidebarMenuButton
            render={
              <NavLink href={`/brewery/${breweryId}/dashboard`}>
                <LayoutDashboardIcon />
                Dashboard
              </NavLink>
            }
          ></SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem hidden={breweryId ? false : true}>
          <SidebarMenuButton
            render={
              <NavLink href={`/brewery/${breweryId}/inventory`}>
                <SettingsIcon />
                Inventory
              </NavLink>
            }
          ></SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
