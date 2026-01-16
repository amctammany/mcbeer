import React from "react";
import { getFermentationProfile } from "@/app/(profiles)/fermentation/queries";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import FermentationProfileEditor from "../../_components/FermentationProfileEditor/FermentationProfileEditor";
import { updateFermentationProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { authorizeResource } from "@/lib/authorizeResource";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import {
  AdjustedEquipmentProfileType,
  AdjustedFermentationProfileType,
} from "@/types/Profile";

export type FermentationProfileEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: FermentationProfileEditorPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getFermentationProfile(slug);
  return {
    title: `Fermentation Profile: ${profile?.name}`,
    description: "Fermentation profile editor",
  };
}
export default async function FermentationProfileEditorPage({
  params,
}: FermentationProfileEditorPageProps) {
  const { slug } = await params;

  const profile = await authorizeResource(
    `/fermentation/${slug}/edit`,
    getFermentationProfile,
    slug
  );
  /**
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: FermentationProfileMask,
    prefs,
    inline: true,
    dir: true,
  }) as AdjustedFermentationProfileType; */
  return (
    <FermentationProfileEditor
      profile={profile}
      // preferences={prefs}
      action={updateFermentationProfile}
    />
  );
}
