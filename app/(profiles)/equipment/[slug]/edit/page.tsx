import React from "react";
import { getEquipmentProfile } from "@/app/(profiles)/equipment/queries";
import { notFound } from "next/navigation";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Save, Split } from "lucide-react";
import { EquipmentProfileEditor } from "@/app/(profiles)/equipment/_components/EquipmentProfileEditor/EquipmentProfileEditor";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import { getPreferences } from "@/app/admin/queries";
import { updateEquipmentProfile } from "../../actions";

export type EquipmentProfileEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function EquipmentProfileEditorPage({
  params,
}: EquipmentProfileEditorPageProps) {
  const { slug } = await params;
  const profile = await getEquipmentProfile(slug);
  console.log(slug, profile);
  if (!profile) notFound();
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: EquipmentProfileMask,
    prefs,
    inline: false,
    dir: true,
  }) as AdjustedEquipmentProfileType;
  console.log(adjusted);
  return (
    <EquipmentProfileEditor
      profile={adjusted}
      preferences={prefs}
      action={updateEquipmentProfile.bind(null, prefs)}
    />
  );
}
