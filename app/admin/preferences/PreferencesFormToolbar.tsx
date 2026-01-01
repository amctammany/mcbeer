"use client";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { RevisionContext } from "@/contexts/RevisionContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function PreferencesFormToolbar() {
  const { state, undo, redo, handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;
  const router = useRouter();
  return (
    <TopBar breadcrumbs={[{ title: "preferences" }]}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          undo();
        }}
        disabled={!canUndo}
      >
        Undo
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          redo();
        }}
        disabled={!canRedo}
      >
        Redo
      </button>
      <button type="button" onClick={() => router.back()}>
        Cancel
      </button>
      <input type="submit" />
    </TopBar>
  );
}
