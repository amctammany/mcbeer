import React from "react";
import { getMashProfile } from "../queries";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import MashProfileDisplay from "../_components/MashProfileDisplay/MashProfileDisplay";
import { Metadata, ResolvingMetadata } from "next";
import { getPreferences } from "@/app/admin/queries";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { MashProfileMask } from "@/lib/Converter/Masks";
import { AdjustedMashProfileType } from "@/types/Profile";

export type MashProfileDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: MashProfileDisplayPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getMashProfile(slug);
  return {
    title: `Mash Profile: ${profile.name}`,
    description: "Mash profile display",
  };
}
export default async function MashProfileDisplayPage({
  params,
}: MashProfileDisplayPageProps) {
  const { slug } = await params;

  const profile = await getMashProfile(slug);
  console.log(profile);
  if (!profile) notFound();
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: profile,
    mask: MashProfileMask,
    prefs,
    inline: false,
    dir: true,
  }) as AdjustedMashProfileType;
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Mash", url: "/mash" },
          { title: profile.name, url: `/mash/${profile.slug}` },
        ]}
      >
        <IconButton icon={Split} href={`/mash/${profile.slug}/fork`}>
          Fork
        </IconButton>

        <IconButton icon={Pencil} href={`/mash/${profile.slug}/edit`}>
          Edit
        </IconButton>
      </TopBar>
      <MashProfileDisplay profile={adjusted} />
    </div>
  );
}
