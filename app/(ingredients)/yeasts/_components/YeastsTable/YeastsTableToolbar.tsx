import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Plus } from "lucide-react";
import React from "react";

export default function YeastsTableToolbar() {
  return (
    <TopBar
      breadcrumbs={[
        { title: "Ingredients" },
        { title: "Yeasts", url: "/yeasts" },
      ]}
    >
      <IconButton icon={Plus} variant="outline" href="/yeasts/new">
        Add
      </IconButton>
    </TopBar>
  );
}
