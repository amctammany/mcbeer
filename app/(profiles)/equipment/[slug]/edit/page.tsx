import React from "react";
import { getEquipmentProfile } from "@/app/(profiles)/equipment/queries";
import { notFound } from "next/navigation";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import type { AdjustedEquipmentProfileType } from "@/types/Profile";
import { EquipmentProfileEditor } from "@/app/(profiles)/equipment/_components/EquipmentProfileEditor/EquipmentProfileEditor";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import { getPreferences } from "@/app/admin/queries";
import { updateEquipmentProfile } from "../../actions";
import { Metadata } from "next";

export type EquipmentProfileEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: EquipmentProfileEditorPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getEquipmentProfile(slug);
  return {
    title: `Editing Equipment Profile: ${profile.name}`,
    description: "Equipment profile Editor",
  };
}
export default async function EquipmentProfileEditorPage({
  params,
}: EquipmentProfileEditorPageProps) {
  const { slug } = await params;
  const profile = await getEquipmentProfile(slug);
  if (!profile) notFound();
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: EquipmentProfileMask,
    prefs,
    inline: false,
    dir: false,
  }) as AdjustedEquipmentProfileType;
  return (
    <EquipmentProfileEditor
      profile={adjusted}
      preferences={prefs}
      action={updateEquipmentProfile.bind(null, prefs)}
    />
  );
}
