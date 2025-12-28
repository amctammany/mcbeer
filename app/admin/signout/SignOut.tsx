"use client";
import React from "react";
import { authClient } from "@/lib/authClient";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
export type SignOutProps = {
  action: () => Promise<void>;
};
export default function SignOut({ action }: SignOutProps) {
  console.log(action);
  const handleSignout = async () => {
    await action();
    redirect("/");
  };
  return (
    <div>
      <Button onClick={handleSignout}>Signout</Button>
    </div>
  );
}
