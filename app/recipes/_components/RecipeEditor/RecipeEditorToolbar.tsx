"use client";
import BackButton from "@/components/Button/BackButton";
import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { FormStateContext } from "@/contexts/FormStateContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import { Redo, Save, Undo, X } from "lucide-react";
import React, { useContext } from "react";
export type RecipeEditorToolbarProps = {
  // src: RecipeType;
};
export default function RecipeEditorToolbar({}: RecipeEditorToolbarProps) {
  const { handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;
  const { data } = useContext(FormStateContext);
  const src = data;

  return (
    <TopBar
      breadcrumbs={[
        { title: "Ingredients" },
        { title: "Recipes", url: "/recipes" },
        ...(src.id
          ? [
              {
                title: src.name,
                url: `/recipes/${src.id}`,
              },
            ]
          : src.origin
            ? [
                {
                  title: src.origin.name,
                  url: `/recipes/${src.origin.id}`,
                },
                { title: "Fork" },
              ]
            : [{ title: "New" }]),
      ]}
    >
      <IconButton
        type="button"
        icon={Undo}
        onClick={handleUndo}
        disabled={!canUndo}
      >
        Undo
      </IconButton>
      <IconButton
        type="button"
        icon={Redo}
        onClick={handleRedo}
        disabled={!canRedo}
      >
        Redo
      </IconButton>
      <BackButton />
      <IconButton icon={Save} type="submit">
        Save
      </IconButton>
    </TopBar>
  );
}
