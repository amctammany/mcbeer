import { auth } from "@/auth";
import { Route } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const cachedAuth = cache(async function () {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
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
