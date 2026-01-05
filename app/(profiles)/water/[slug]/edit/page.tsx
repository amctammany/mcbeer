import React from "react";
import { getWaterProfile } from "@/app/(profiles)/water/queries";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import WaterProfileEditor from "../../_components/WaterProfileEditor/WaterProfileEditor";
import { updateWaterProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { authorizeResource } from "@/lib/authorizeResource";

export type WaterProfileEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: WaterProfileEditorPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getWaterProfile(slug);
  return {
    title: `Water Profile: ${profile.name}`,
    description: "Water profile editor",
  };
}
export default async function WaterProfileEditorPage({
  params,
}: WaterProfileEditorPageProps) {
  const { slug } = await params;

  const profile = await authorizeResource(
    `/water/${slug}/edit`,
    getWaterProfile,
    slug
  );
  const prefs = await getPreferences();
  return (
    <WaterProfileEditor
      profile={profile}
      preferences={prefs}
      action={updateWaterProfile}
    />
  );
}
