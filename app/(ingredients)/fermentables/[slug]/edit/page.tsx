import React from "react";
import { getFermentable } from "@/app/(ingredients)/fermentables/queries";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { updateFermentable } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { authorizeResource } from "@/lib/authorizeResource";
import FermentableEditor from "../../_components/FermentableEditor/FermentableEditor";
import { FermentableMask } from "@/lib/Converter/Masks";
import { AdjustedFermentableType } from "@/types/Ingredient";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { getCountries } from "@/app/(ingredients)/queries";

export type FermentableEditorPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: FermentableEditorPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getFermentable(slug);
  return {
    title: `Mash Profile: ${profile.name}`,
    description: "Mash profile editor",
  };
}
export default async function FermentableEditorPage({
  params,
}: FermentableEditorPageProps) {
  const { slug } = await params;

  const src = await authorizeResource(
    `/fermentables/${slug}/edit`,
    getFermentable,
    slug
  );
  const prefs = await getPreferences();
  const countries = await getCountries();
  const adjusted = adjustUnits({
    src,
    mask: FermentableMask,
    prefs,
    inline: true,
    dir: true,
    precision: 4,
  }) as AdjustedFermentableType;
  return (
    <FermentableEditor
      src={adjusted}
      countries={countries}
      preferences={prefs}
      action={updateFermentable.bind(null, prefs)}
    />
  );
}
