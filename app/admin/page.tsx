import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import React from "react";
import Dashboard from "./_components/Dashboard/Dashboard";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const session = await auth();
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
