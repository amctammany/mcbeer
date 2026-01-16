import React from "react";
import { getFermentationProfile } from "@/app/(profiles)/fermentation/queries";
import { notFound, unauthorized } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import FermentationProfileEditor from "../../_components/FermentationProfileEditor/FermentationProfileEditor";
import { createFermentationProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/verifySession";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
import { adjustUnits } from "@/lib/Converter/adjustUnits";

export type FermentationProfileForkPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: FermentationProfileForkPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getFermentationProfile(slug);
  return {
    title: `Fermentation Profile: ${profile.name}`,
    description: "Fermentation profile editor",
  };
}
export default async function FermentationProfileForkPage({
  params,
}: FermentationProfileForkPageProps) {
  const { slug } = await params;
  const session = await verifySession(`/fermentation/${slug}/fork`);
  const { id, owner, origin, forks, ...old } = await getFermentationProfile(
    slug
  );
  if (!old) notFound();
  const count = await prisma.equipmentProfile.count({
    where: { userId: session.user.id, forkedFrom: id },
  });
  const name = `${session.user.name} - ${old.name} (${count})`;
  const prefs = await getPreferences();
  const fork = {
    ...old,
    name,
    userId: session?.user.id,
    origin: old,
    forkedFrom: id,
  } as FermentationProfileType;
  const adjusted = adjustUnits({
    src: fork,
    mask: FermentationProfileMask,
    prefs,
    inline: true,
    dir: true,
  }) as AdjustedFermentationProfileType;
  return (
    <FermentationProfileEditor
      profile={fork}
      // preferences={prefs}
      action={createFermentationProfile.bind(null, prefs)}
    />
  );
}
