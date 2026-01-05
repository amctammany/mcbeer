import React from "react";
import { notFound, unauthorized } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import WaterProfileEditor from "@/app/(profiles)/water/_components/WaterProfileEditor/WaterProfileEditor";
import { createWaterProfile } from "@/app/(profiles)/water/actions";
import { getPreferences } from "@/app/admin/queries";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { WaterProfileType } from "@/types/Profile";

export default async function WaterProfileCreatorPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) unauthorized();
  const prefs = await getPreferences();
  const profile = {
    userId: session?.user.id,
  } as WaterProfileType;
  if (!profile) notFound();
  return (
    <WaterProfileEditor
      profile={profile}
      preferences={prefs}
      action={createWaterProfile}
    />
  );
}
