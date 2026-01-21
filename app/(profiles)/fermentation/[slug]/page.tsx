import React from "react";
import { getFermentationProfile } from "../queries";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import FermentationProfileDisplay from "../_components/FermentationProfileDisplay/FermentationProfileDisplay";
import { Metadata, ResolvingMetadata } from "next";
import { getPreferences } from "@/app/admin/queries";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
import { AdjustedFermentationProfileType } from "@/types/Profile";

export type FermentationProfileDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: FermentationProfileDisplayPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getFermentationProfile(slug);
  return {
    title: `Fermentation Profile: ${profile?.name}`,
    description: "Fermentation profile display",
  };
}
export default async function FermentationProfileDisplayPage({
  params,
}: FermentationProfileDisplayPageProps) {
  const { slug } = await params;

  const profile = await getFermentationProfile(slug);
  if (!profile) notFound();
  /**
   * 
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: FermentationProfileMask,
    prefs,
    inline: false,
    dir: true,
  }) as AdjustedFermentationProfileType;
   */
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Fermentation", url: "/fermentation" },
          { title: profile.name, url: `/fermentation/${profile.slug}` },
        ]}
      >
        <IconButton icon={Split} href={`/fermentation/${profile.slug}/fork`}>
          Fork
        </IconButton>

        <IconButton icon={Pencil} href={`/fermentation/${profile.slug}/edit`}>
          Edit
        </IconButton>
      </TopBar>
      <FermentationProfileDisplay profile={profile} />
    </div>
  );
}
