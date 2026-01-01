"use client";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { RevisionContext } from "@/contexts/RevisionContext";
import { AdjustedEquipmentProfileType } from "@/types/Profile";
import React, { useContext } from "react";
export type EquipmentProfileEditorToolbarProps = {
  profile: AdjustedEquipmentProfileType;
};
export default function EquipmentProfileEditorToolbar({
  profile,
}: EquipmentProfileEditorToolbarProps) {
  const { handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;

  return (
    <TopBar
      breadcrumbs={[
        { title: "Profiles" },
        { title: "Equipment", url: "/equipment" },
        profile.id
          ? {
              title: profile.name,
              url: `/equipment/${profile.slug}`,
            }
          : { title: "New" },
      ]}
    >
      <Button onClick={handleUndo} disabled={!canUndo}>
        Undo
      </Button>
      <Button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </Button>
      <Button type="submit">Save</Button>
    </TopBar>
  );
}
