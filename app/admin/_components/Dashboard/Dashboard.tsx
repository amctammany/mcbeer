import LogoutButton from "@/app/(auth)/_components/LogoutButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { User } from "@/generated/prisma/client";
import Link from "next/link";
import React from "react";

export type DashboardProps = {
  user?: User;
};
export default function Dashboard({ user }: DashboardProps) {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Dashboard", url: "/admin" }]}>
        <LogoutButton />
      </TopBar>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome back, {user?.name}!</p>
      </div>
      <div className="grid lg:grid-cols-2 *:p-4 *:m-4 *:border-2 *:border-black *:rounded-lg ">
        <div>News</div>
        <div>Friends</div>
        <div>
          <Link href="/admin/settings">Settings</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
