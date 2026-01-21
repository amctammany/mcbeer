import React from "react";
import { getMashProfile } from "@/app/(profiles)/mash/queries";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import MashProfileEditor from "../../_components/MashProfileEditor/MashProfileEditor";
import { updateMashProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { authorizeResource } from "@/lib/authorizeResource";
import { MashProfileMask } from "@/lib/Converter/Masks";
import { AdjustedMashProfileType } from "@/types/Profile";
import { adjustUnits } from "@/lib/Converter/adjustUnits";

export type MashProfileEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: MashProfileEditorPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getMashProfile(slug);
  return {
    title: `Mash Profile: ${profile.name}`,
    description: "Mash profile editor",
  };
}
export default async function MashProfileEditorPage({
  params,
}: MashProfileEditorPageProps) {
  const { slug } = await params;

  const profile = await authorizeResource(
    `/mash/${slug}/edit`,
    getMashProfile,
    slug,
  );
  // const prefs = await getPreferences();
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: MashProfileMask,
    prefs,
    inline: false,
    dir: true,
  }) as AdjustedMashProfileType;
  return (
    <MashProfileEditor
      profile={adjusted}
      // preferences={prefs}
      action={updateMashProfile}
    />
  );
}
