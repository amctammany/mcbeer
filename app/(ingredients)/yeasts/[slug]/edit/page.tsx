import React from "react";
import { getYeast } from "@/app/(ingredients)/yeasts/queries";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { updateYeast } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { authorizeResource } from "@/lib/authorizeResource";
import { YeastMask } from "@/lib/Converter/Masks";
import { AdjustedYeastType } from "@/types/Ingredient";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { count } from "node:console";
import { getCountries } from "@/app/(ingredients)/queries";
import YeastEditor from "../../_components/YeastEditor/YeastEditor";

export type YeastEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: YeastEditorPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getYeast(slug);
  return {
    title: `Mash Profile: ${profile.name}`,
    description: "Mash profile editor",
  };
}
export default async function YeastEditorPage({
  params,
}: YeastEditorPageProps) {
  const { slug } = await params;

  const src = await authorizeResource(`/yeasts/${slug}/edit`, getYeast, slug);
  const prefs = await getPreferences();
  const countries = await getCountries();
  const adjusted = adjustUnits({
    src,
    mask: YeastMask,
    prefs,
    inline: true,
    dir: true,
    precision: 4,
  }) as AdjustedYeastType;
  return (
    <YeastEditor
      countries={countries}
      src={adjusted}
      preferences={prefs}
      action={updateYeast.bind(null, prefs)}
    />
  );
}
