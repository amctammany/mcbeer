import React from "react";
import { getWaterProfile } from "@/app/(profiles)/water/queries";
import { notFound, unauthorized } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import WaterProfileEditor from "@/app/(profiles)/water/_components/WaterProfileEditor/WaterProfileEditor";
import { updateWaterProfile } from "@/app/(profiles)/water/actions";
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
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Water", url: "/water" },
          { title: "New" },
        ]}
      ></TopBar>
      <WaterProfileEditor
        profile={profile}
        preferences={prefs}
        action={updateWaterProfile}
      />
    </div>
  );
}
