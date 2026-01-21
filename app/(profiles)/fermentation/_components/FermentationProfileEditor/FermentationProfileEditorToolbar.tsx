"use client";
import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import { Redo, Undo } from "lucide-react";
import React, { useContext } from "react";
export type FermentationProfileEditorToolbarProps = {
  profile: FermentationProfileType;
};
export default function FermentationProfileEditorToolbar({
  profile,
}: FermentationProfileEditorToolbarProps) {
  const { handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;

  return (
    <TopBar
      breadcrumbs={[
        { title: "Profiles" },
        { title: "Fermentation", url: "/fermentation" },
        ...(profile.id
          ? [
              {
                title: profile.name,
                url: `/fermentation/${profile.slug}`,
              },
            ]
          : profile.origin
            ? [
                {
                  title: profile.origin.name,
                  url: `/fermentation/${profile.slug}`,
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
      <Button type="submit">Save</Button>
    </TopBar>
  );
}
