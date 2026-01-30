import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import RecipeDisplay from "../_components/RecipeDisplay/RecipeDisplay";

export default function Loading() {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Recipes" }]}></TopBar>
      <RecipeDisplay src={{ owner: { name: "" } } as any} />
    </div>
  );
}
