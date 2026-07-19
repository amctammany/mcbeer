import { LinkButton } from "@/components/Button/LinkButton";
import { TopBar } from "@/components/TopBar/TopBar";
import React, { Suspense } from "react";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";

export default function Login({
  redirectUrl = "/admin",
}: {
  redirectUrl?: string;
}) {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Sign In" }]}></TopBar>
      <div className="h-screen w-full flex justify-center align-middle items-center text-center">
        <div className="w-xl bg-amber-50 border-2 rounded-md py-20 m-auto flex justify-center align-middle items-center text-center flex-col">
          <h4 className="text-2xl font-bold">Login</h4>

          <LinkButton href="/register">Register</LinkButton>
          <Suspense fallback={<div>Login Loading</div>}>
            <LoginForm redirectUrl={redirectUrl} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
