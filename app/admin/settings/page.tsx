import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import React, { Suspense } from "react";
import { updateUserSettings } from "@/app/admin/actions";
import { prisma } from "@/lib/prisma";
import Settings from "@/app/admin/_components/Settings/Settings";
import { headers } from "next/headers";
import { cachedAuth } from "@/lib/verifySession";

export default async function SettingsPage() {
  // const h = await headers();
  const session = await cachedAuth();
  if (!session) {
    return unauthorized();
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      breweries: {
        include: { brewery: { select: { name: true, id: true } } },
      },
      UserPreferences: true,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Settings user={user} action={updateUserSettings} />
    </Suspense>
  );
}
