import React from "react";
import { getYeast } from "../queries";
import YeastDisplay from "../_components/YeastDisplay/YeastDisplay";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { getPreferences } from "@/app/admin/queries";
import { notFound } from "next/navigation";
import { YeastMask } from "@/lib/Converter/Masks";
import YeastDisplayToolbar from "../_components/YeastDisplay/YeastDisplayToolbar";
import { AdjustedYeastType } from "@/types/Ingredient";

export type YeastDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function YeastDisplayPage({
  params,
}: YeastDisplayPageProps) {
  const { slug } = await params;
  const yeast = await getYeast(slug);
  const prefs = await getPreferences();
  if (!yeast) notFound();
  const adjusted: AdjustedYeastType = adjustUnits({
    src: yeast,
    prefs,
    mask: YeastMask,
    inline: false,
    precision: 2,
    dir: true,
  });
  console.log({ adjusted, yeast });
  return (
    <div>
      <YeastDisplayToolbar yeast={yeast} />
      <YeastDisplay src={adjusted} prefs={prefs} />
    </div>
  );
}
