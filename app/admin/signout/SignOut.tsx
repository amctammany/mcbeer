"use client";
import React from "react";
import { authClient } from "@/lib/authClient";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
export type SignOutProps = {
  action: () => Promise<void>;
};
export default function SignOut({ action }: SignOutProps) {
  console.log(action);
  const router = useRouter();
  const handleSignout = async () => {
    await action();
    router.push("/");
  };
  return (
    <div>
      <Button
        onClick={async () => {
          await authClient.signOut();
          router.push("/");
        }}
      >
        Signout
      </Button>
    </div>
  );
}
