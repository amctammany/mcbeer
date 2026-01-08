"use cache";
import {
  GalleryVerticalEnd,
  ChevronsUpDown,
  BookOpen,
  CookingPot,
  FlaskConical,
  FolderCog,
  Hop,
  NotebookTabs,
  PillBottle,
  ToolCase,
  Wheat,
  Droplet,
  Thermometer,
  ChartLine,
  ShoppingBasket,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";
import { NavMain } from "./NavMain";
import { NavAdmin } from "./NavAdmin";
import NavLink from "./NavLink";
import { Suspense } from "react";

const data = {
  ingredients: [
    {
      title: "Recipes",
      icon: BookOpen,
      url: "#",
      items: [
        {
          title: "Library",
          url: "#",
        },
        {
          title: "Public",
          url: "#",
        },
      ],
    },
    {
      title: "Ingredients",
      url: "/ingredients",
      icon: ShoppingBasket,
      items: [
        {
          title: "Fermentables",
          icon: Wheat,
          url: "/fermentables",
        },
        {
          title: "Hops",
          icon: Hop,
          url: "/hops",
          //          isActive: true,
        },
        {
          title: "Yeasts",
          icon: FlaskConical,
          url: "/yeasts",
        },
        {
          title: "Other",
          icon: PillBottle,
          url: "/other",
        },
      ],
    },
    {
      title: "Profiles",
      icon: FolderCog,
      items: [
        {
          title: "Equipment",
          url: "/equipment",
          icon: CookingPot,
        },
        {
          title: "Mash",
          icon: Thermometer,
          url: "/mash",
        },
        {
          title: "Water",
          icon: Droplet,
          url: "/water",
        },
        {
          title: "Fermentation",
          icon: ChartLine,
          url: "/fermentation",
        },
      ],
    },
    {
      title: "Styles",
      icon: NotebookTabs,
      url: "/styles",
    },
    {
      title: "Tools",
      icon: ToolCase,
      url: "/tools",
      items: [
        { title: "ABV Calculator", url: "#" },
        { title: "IBU Calculator", url: "#" },
        { title: "Color Calculator", url: "#" },
      ],
    },
  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <NavLink
                href="/"
                className="grid flex-1 text-left text-sm leading-tight"
              >
                <span className="truncate font-medium">McBeer</span>
                <span className="truncate text-xs">Brewing</span>
              </NavLink>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.ingredients} />
        <Suspense fallback={<div>Loading...</div>}>
          <NavAdmin />
        </Suspense>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
export default NavSidebar;
