import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import React from "react";
import Dashboard from "./_components/Dashboard/Dashboard";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (!session) {
    return unauthorized();
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return <Dashboard user={user} />;
}
