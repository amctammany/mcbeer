import React from "react";
import { getWaterProfile } from "../queries";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import WaterProfileDisplay from "../_components/WaterProfileDisplay/WaterProfileDisplay";
import { Metadata, ResolvingMetadata } from "next";

export type WaterProfileDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: WaterProfileDisplayPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getWaterProfile(slug);
  return {
    title: `Water Profile: ${profile.name}`,
    description: "Water profile display",
  };
}
export default async function WaterProfileDisplayPage({
  params,
}: WaterProfileDisplayPageProps) {
  const { slug } = await params;
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
      <WaterProfileDisplay profile={profile} />
    </div>
  );
}
