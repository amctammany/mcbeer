import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Plus } from "lucide-react";
import React from "react";

export default function HopsTableToolbar() {
  return (
    <TopBar
      breadcrumbs={[{ title: "Ingredients" }, { title: "Hops", url: "/hops" }]}
    >
      <IconButton icon={Plus} variant="outline" href="/hops/new">
        Add
      </IconButton>
    </TopBar>
  );
}
