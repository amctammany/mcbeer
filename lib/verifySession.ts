//import { auth } from "@/auth";
import { Route } from "next";
import { redirect } from "next/navigation";
import { cache } from "react";

export const cachedAuth = cache(async function () {
  const session = await Promise.resolve({ user: null }); //auth();
  return session;
});
export const verifySession = cache(async function (redirect_url = "") {
  const session = await cachedAuth();
  if (!session?.user) {
    const url = new URLSearchParams({
      redirect_url,
    }).toString();
    return redirect(("/admin/login?" + url.toString()) as Route);
  }
  return session;
});
