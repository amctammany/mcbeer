import React from "react";
import { unauthorized } from "next/navigation";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import type {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import { EquipmentProfileEditor } from "@/app/(profiles)/equipment/_components/EquipmentProfileEditor/EquipmentProfileEditor";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import { getPreferences } from "@/app/admin/queries";
import { createEquipmentProfile } from "../actions";
import { auth } from "@/auth";
import { headers } from "next/headers";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "New Equipment Profile",
  description: "Equipment Profile creator",
};
export default async function EquipmentProfileCreatorPage() {
  const prefs = await getPreferences();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) unauthorized();
  const profile = {
    userId: session.user.id,
    boilTime: 60,
    brewEfficiency: 0.68,
    mashEfficiency: 0.7,
    batchVolume: 5,
    boilVolume: 8,
    preboilVolume: 10,
    trubLoss: 0,
    mashLoss: 0,
    fermenterLoss: 0,
    fermenterTopOff: 0,
  } as EquipmentProfileType;
  //console.log(adjusted);
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
      action={createEquipmentProfile.bind(null, prefs)}
    />
  );
}
