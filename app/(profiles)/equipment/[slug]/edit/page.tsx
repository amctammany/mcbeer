import { getEquipmentProfile } from "@/app/(profiles)/equipment/queries";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import type { AdjustedEquipmentProfileType } from "@/types/Profile";
import { EquipmentProfileEditor } from "@/app/(profiles)/equipment/_components/EquipmentProfileEditor/EquipmentProfileEditor";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import { getPreferences } from "@/app/admin/queries";
import { updateEquipmentProfile } from "../../actions";
import { Metadata } from "next";
import { authorizeResource } from "@/lib/authorizeResource";

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

  const profile = await authorizeResource(
    `/equipment/${slug}/edit`,
    getEquipmentProfile,
    slug
  );
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: EquipmentProfileMask,
    prefs,
    inline: false,
    dir: true,
  }) as AdjustedEquipmentProfileType;
  return (
    <EquipmentProfileEditor
      profile={adjusted}
      // preferences={prefs}
      action={updateEquipmentProfile}
    />
  );
}
