"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await authClient.signOut();
        router.push("/");
      }}
    >
      {children ?? "Logout"}
    </Button>
  );
}
