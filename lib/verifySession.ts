import { auth } from "@/auth";
import { Route } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
// import { cache } from "react";

export const cachedAuth = async function () {
  await connection();
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  return session;
};
export const verifySession = async function (redirect_url = "") {
  "use server";
  const session = await cachedAuth();
  if (!session?.user) {
    const url = new URLSearchParams({
      redirect_url,
    }).toString();
    return redirect(("/login?" + url.toString()) as Route);
  }
  return session;
};
