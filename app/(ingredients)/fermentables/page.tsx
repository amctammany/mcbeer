import React from "react";
import { getFermentables } from "./queries";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Plus } from "lucide-react";
import FermentablesTable from "./_components/FermentablesTable/FermentablesTable";
export default async function FermentablesTablePage() {
  const fermentables = await getFermentables();
  return (
    <div>
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
      <FermentablesTable src={fermentables} />
    </div>
  );
}
