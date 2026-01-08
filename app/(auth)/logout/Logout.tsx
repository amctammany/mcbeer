"use client";
import React from "react";
import { authClient } from "@/lib/authClient";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export type LogoutProps = {
  action: () => Promise<void>;
};
export function Logout({ action }: LogoutProps) {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex justify-center align-middle items-center text-center">
      <div className="w-xl bg-amber-50 border-2 rounded-md py-20 m-auto flex justify-center align-middle items-center text-center flex-col">
        <h3 className="text-2xl mb-4">Are you sure you want to sign out?</h3>
        <Button
          onClick={async () => {
            await authClient.signOut();
            router.push("/");
          }}
        >
          Signout
        </Button>
      </div>
    </div>
  );
}
export default Logout;
