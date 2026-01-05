import React from "react";
import { notFound, unauthorized } from "next/navigation";
import FermentationProfileEditor from "@/app/(profiles)/fermentation/_components/FermentationProfileEditor/FermentationProfileEditor";
import { createFermentationProfile } from "@/app/(profiles)/fermentation/actions";
import { getPreferences } from "@/app/admin/queries";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import { verifySession } from "@/lib/verifySession";

export default async function FermentationProfileCreatorPage() {
  const session = await verifySession("/fermentation/new");
  if (!session?.user) unauthorized();
  const prefs = await getPreferences();
  const profile = {
    userId: session.user.id,
  } as AdjustedFermentationProfileType;
  if (!profile) notFound();
  return (
    <FermentationProfileEditor
      profile={profile}
      preferences={prefs}
      action={createFermentationProfile.bind(null, prefs)}
    />
  );
}
