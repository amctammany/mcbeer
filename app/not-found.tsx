import NavSidebar from "@/components/NavSidebar/NavSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <NavSidebar />
      <SidebarInset>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </SidebarInset>
    </div>
  );
}
