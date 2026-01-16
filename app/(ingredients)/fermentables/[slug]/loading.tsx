import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import React from "react";
import FermentableDisplay from "../_components/FermentableDisplay/FermentableDisplay";

export default function Loading() {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Ingredients" }]}></TopBar>
      <FermentableDisplay src={{} as any} />
    </div>
  );
}
