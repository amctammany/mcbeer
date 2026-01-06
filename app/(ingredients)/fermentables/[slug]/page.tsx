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

export type FermentableDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function FermentableDisplayPage({
  params,
}: FermentableDisplayPageProps) {
  const { slug } = await params;
  const fermentable = await getFermentable(slug);
  if (!fermentable) notFound();
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: fermentable,
    prefs,
    mask: FermentableMask,
    inline: false,
    precision: 4,
    dir: true,
  });
  console.log(fermentable, adjusted);
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Ingredients" },
          { title: "Fermentables", url: "/fermentables" },
          { title: fermentable.name, url: `/fermentables/${fermentable.slug}` },
        ]}
      >
        <IconButton
          icon={Split}
          href={`/fermentables/${fermentable.slug}/fork`}
        >
          Fork
        </IconButton>

        <IconButton
          icon={Pencil}
          href={`/fermentables/${fermentable.slug}/edit`}
        >
          Edit
        </IconButton>
      </TopBar>
      <FermentableDisplay src={adjusted} />
    </div>
  );
}
