import React from "react";
import { getEquipmentProfile } from "../queries";
import { notFound } from "next/navigation";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { AdjustedEquipmentProfileType } from "@/types/Profile";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import EquipmentProfileDisplay from "../_components/EquipmentProfileDisplay/EquipmentProfileDisplay";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import { getPreferences } from "@/app/admin/queries";
import { Metadata, ResolvingMetadata } from "next";

export type EquipmentProfileDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: EquipmentProfileDisplayPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getEquipmentProfile(slug);
  return {
    title: `Equipment Profile: ${profile.name}`,
    description: "Equipment profile display",
  };
}
export default async function EquipmentProfileDisplayPage({
  params,
}: EquipmentProfileDisplayPageProps) {
  const { slug } = await params;
  const profile = await getEquipmentProfile(slug);
  if (!profile) notFound();
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: EquipmentProfileMask,
    prefs,
    inline: false,
    dir: true,
  }) as AdjustedEquipmentProfileType;
  console.log(prefs, adjusted);
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Equipment", url: "/equipment" },
          { title: profile.name, url: `/equipment/${profile.slug}` },
        ]}
      >
        <IconButton icon={Split} href={`/equipment/${profile.slug}/fork`}>
          Fork
        </IconButton>

        <IconButton icon={Pencil} href={`/equipment/${profile.slug}/edit`}>
          Edit
        </IconButton>
      </TopBar>
      <EquipmentProfileDisplay profile={adjusted} />
    </div>
  );
}
