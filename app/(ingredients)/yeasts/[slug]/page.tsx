import React from "react";
import { getYeast } from "../queries";
import YeastDisplay from "../_components/YeastDisplay/YeastDisplay";
import { notFound } from "next/navigation";
import YeastDisplayToolbar from "../_components/YeastDisplay/YeastDisplayToolbar";

export type YeastDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function YeastDisplayPage({
  params,
}: YeastDisplayPageProps) {
  const { slug } = await params;
  const yeast = await getYeast(slug);
  if (!yeast) notFound();
  // const adjusted: AdjustedYeastType = adjustUnits({
  //   src: yeast,
  //   prefs,
  //   mask: YeastMask,
  //   inline: false,
  //   precision: 2,
  //   dir: true,
  // });
  // console.log({ adjusted, yeast });
  return (
    <div>
      <YeastDisplayToolbar yeast={yeast} />
      <YeastDisplay src={yeast} />
    </div>
  );
}
