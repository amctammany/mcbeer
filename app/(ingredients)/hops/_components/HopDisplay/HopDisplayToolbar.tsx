import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import type { HopType } from "@/types/Ingredient";
import { Pencil, Split } from "lucide-react";
import React, { use } from "react";

export default function HopDisplayToolbar({
  hop: _hop,
}: {
  hop: Promise<HopType>;
}) {
  const hop = use(_hop);
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
