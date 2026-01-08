import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { AdjustedHopType } from "@/types/Ingredient";
import { Pencil, Split } from "lucide-react";
import React from "react";

export default function HopDisplayToolbar({ hop }: { hop: AdjustedHopType }) {
  return (
    <TopBar
      breadcrumbs={[
        { title: "Ingredients" },
        { title: "Hops", url: "/hops" },
        { title: hop.name, url: `/hops/${hop.slug}` },
      ]}
    >
      <IconButton icon={Split} href={`/hops/${hop.slug}/fork`}>
        Fork
      </IconButton>

      <IconButton icon={Pencil} href={`/hops/${hop.slug}/edit`}>
        Edit
      </IconButton>
    </TopBar>
  );
}
