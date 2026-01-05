import React from "react";
import { getWaterProfile } from "@/app/(profiles)/water/queries";
import { notFound, unauthorized } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import WaterProfileEditor from "../../_components/WaterProfileEditor/WaterProfileEditor";
import { createWaterProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { WaterProfileType } from "@/types/Profile";

export type WaterProfileForkPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: WaterProfileForkPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getWaterProfile(slug);
  return {
    title: `Water Profile: ${profile.name}`,
    description: "Water profile editor",
  };
}
export default async function WaterProfileForkPage({
  params,
}: WaterProfileForkPageProps) {
  const { slug } = await params;
  const profile = await getWaterProfile(slug);
  if (!profile) notFound();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) unauthorized();
  const prefs = await getPreferences();
  const fork = { ...profile, userId: session?.user.id } as WaterProfileType;
  return (
    <WaterProfileEditor
      profile={fork}
      preferences={prefs}
      action={createWaterProfile}
    />
  );
}
