"use client";
import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import { Redo, Undo } from "lucide-react";
import React, { useContext } from "react";
export type EquipmentProfileEditorToolbarProps = {
  profile: EquipmentProfileType;
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
