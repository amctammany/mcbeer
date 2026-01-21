import React from "react";
import { getHop } from "@/app/(ingredients)/hops/queries";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { updateHop } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { authorizeResource } from "@/lib/authorizeResource";
import HopEditor from "../../_components/HopEditor/HopEditor";
import { HopMask } from "@/lib/Converter/Masks";
import { AdjustedHopType } from "@/types/Ingredient";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { count } from "node:console";
import { getCountries } from "@/app/(ingredients)/queries";

export type HopEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: HopEditorPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getHop(slug);
  return {
    title: `Mash Profile: ${profile.name}`,
    description: "Mash profile editor",
  };
}
export default async function HopEditorPage({ params }: HopEditorPageProps) {
  const { slug } = await params;

  const src = await authorizeResource(`/hops/${slug}/edit`, getHop, slug);
  // const prefs = await getPreferences();
  const countries = await getCountries();
  /**
  const adjusted = adjustUnits({
    src,
    mask: HopMask,
    prefs,
    inline: true,
    dir: true,
    precision: 4,
  }) as AdjustedHopType;
 */
  return (
    <HopEditor
      countries={countries}
      src={src}
      // preferences={prefs}
      action={updateHop}
    />
  );
}
