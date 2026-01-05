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
  const prefs = await getPreferences();
  const profile = await getWaterProfile(slug);
  if (!profile) notFound();
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Water", url: "/water" },
          { title: profile.name, url: `/water/${profile.slug}` },
        ]}
      >
        <IconButton icon={Split} href={`/water/${profile.slug}/fork`}>
          Fork
        </IconButton>

        <IconButton icon={Pencil} href={`/water/${profile.slug}/edit`}>
          Edit
        </IconButton>
      </TopBar>
      <WaterProfileEditor
        profile={profile}
        preferences={prefs}
        action={updateWaterProfile}
      />
    </div>
  );
}
