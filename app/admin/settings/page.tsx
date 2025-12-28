import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import React from "react";
import { updateUserSettings } from "@/app/admin/actions";
import { prisma } from "@/lib/prisma";
import Settings from "@/app/admin/_components/Settings/Settings";
import { headers } from "next/headers";

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return unauthorized();
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { UserPreferences: true },
  });
  if (!user) {
    throw new Error("User not found");
  }
  console.log("User:", user);
  return (
    <div>
      <Settings user={user} action={updateUserSettings} />
    </div>
  );
}
