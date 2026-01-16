"use client";
import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { RevisionContext } from "@/contexts/RevisionContext";
import { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import { Redo, Save, Undo } from "lucide-react";
import React, { useContext } from "react";
export type YeastEditorToolbarProps = {
  src: YeastType;
};
export default function YeastEditorToolbar({ src }: YeastEditorToolbarProps) {
  const { handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;

  return (
    <TopBar
      breadcrumbs={[
        { title: "Ingredients" },
        { title: "Yeasts", url: "/yeasts" },
        ...(src.id
          ? [
              {
                title: src.name,
                url: `/yeasts/${src.slug}`,
              },
            ]
          : src.origin
          ? [
              {
                title: src.origin.name,
                url: `/yeasts/${src.origin.slug}`,
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
      <IconButton icon={Save} type="submit">
        Save
      </IconButton>
    </TopBar>
  );
}
