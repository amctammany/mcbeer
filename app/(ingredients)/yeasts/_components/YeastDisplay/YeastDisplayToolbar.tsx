import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import type { YeastType } from "@/types/Ingredient";
import { Pencil, Split } from "lucide-react";
import React from "react";

export default function YeastDisplayToolbar({ yeast }: { yeast: YeastType }) {
  return (
    <TopBar
      breadcrumbs={[
        { title: "Ingredients" },
        { title: "Yeasts", url: "/yeasts" },
        { title: yeast.name, url: `/yeasts/${yeast.slug}` },
      ]}
    >
      <IconButton icon={Split} href={`/yeasts/${yeast.slug}/fork`}>
        Fork
      </IconButton>

      <IconButton icon={Pencil} href={`/yeasts/${yeast.slug}/edit`}>
        Edit
      </IconButton>
    </TopBar>
  );
}
