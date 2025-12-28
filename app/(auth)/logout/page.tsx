import React from "react";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { Logout } from "./Logout";

export default function Page() {
  const signOut = async () => {
    "use server";
    await auth.api.signOut({
      headers: await headers(),
    });
  };
  return (
    <div>
      <Logout action={signOut} />
    </div>
  );
}
