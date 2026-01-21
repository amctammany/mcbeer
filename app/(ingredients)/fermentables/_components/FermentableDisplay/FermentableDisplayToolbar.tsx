import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { AdjustedFermentableType, FermentableType } from "@/types/Ingredient";
import { Pencil, Split } from "lucide-react";
import React from "react";

export default function FermentableDisplayToolbar({
  fermentable,
}: {
  fermentable: FermentableType;
}) {
  return (
    <TopBar
      breadcrumbs={[
        { title: "Ingredients" },
        { title: "Fermentables", url: "/fermentables" },
        { title: fermentable.name, url: `/fermentables/${fermentable.slug}` },
      ]}
    >
      <IconButton icon={Split} href={`/fermentables/${fermentable.slug}/fork`}>
        Fork
      </IconButton>

      <IconButton icon={Pencil} href={`/fermentables/${fermentable.slug}/edit`}>
        Edit
      </IconButton>
    </TopBar>
  );
}
