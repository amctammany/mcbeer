import React from "react";
import { getFermentable } from "../queries";
import FermentableDisplay from "../_components/FermentableDisplay/FermentableDisplay";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { getPreferences } from "@/app/admin/queries";
import { notFound } from "next/navigation";
import { FermentableMask } from "@/lib/Converter/Masks";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import FermentableDisplayToolbar from "../_components/FermentableDisplay/FermentableDisplayToolbar";

export type FermentableDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function FermentableDisplayPage({
  params,
}: FermentableDisplayPageProps) {
  const { slug } = await params;
  const [fermentable, prefs] = await Promise.all([
    getFermentable(slug),
    getPreferences(),
  ]);
  if (!fermentable) notFound();
  const adjusted = adjustUnits({
    src: fermentable,
    prefs,
    mask: FermentableMask,
    inline: false,
    precision: 4,
    dir: true,
  });
  return (
    <div>
      <FermentableDisplayToolbar fermentable={adjusted} />
      <FermentableDisplay src={adjusted} />
    </div>
  );
}
