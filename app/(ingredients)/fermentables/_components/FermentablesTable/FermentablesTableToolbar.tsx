import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Plus } from "lucide-react";
import React from "react";

export default function FermentablesTableToolbar() {
  return (
    <TopBar
      breadcrumbs={[
        { title: "Ingredients" },
        { title: "Fermentables", url: "/fermentables" },
      ]}
    >
      <IconButton icon={Plus} variant="outline" href="/fermentables/new">
        Add
      </IconButton>
    </TopBar>
  );
}
