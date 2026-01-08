import React from "react";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { Logout } from "./Logout";
import { TopBar } from "@/components/TopBar/TopBar";

export default async function Page() {
  const signOut = async () => {
    "use server";
    await auth.api.signOut({
      headers: await headers(),
    });
  };
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Sign Out" }]}></TopBar>
      <Logout action={signOut} />
    </div>
  );
}
