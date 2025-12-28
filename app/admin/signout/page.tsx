import React from "react";
import SignOut from "./SignOut";
import { auth } from "@/auth";
import { headers } from "next/headers";

export default function Page() {
  const signOut = async () => {
    "use server";
    await auth.api.signOut({
      headers: await headers(),
    });
  };
  return (
    <div>
      <SignOut action={signOut} />
    </div>
  );
}
