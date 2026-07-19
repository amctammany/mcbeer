import Login from "@/app/(auth)/_components/LoginButton";
import NavSidebar from "@/components/NavSidebar/NavSidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function Unauthorized() {
  return (
    <main>
      <NavSidebar />
      <SidebarInset>
        <h1>401 - Unauthorized</h1>
        <p>Please log in to access this page.</p>
        <Login />
      </SidebarInset>
    </main>
  );
}
