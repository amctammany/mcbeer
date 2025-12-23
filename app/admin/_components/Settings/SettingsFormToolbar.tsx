"use client";
import { RevisionContext } from "@/contexts/RevisionContext";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserType } from "./SettingsForm";
import { Button } from "@/components/ui/button";

export default function SettingsFormToolbar() {
  const formContext = useFormContext<UserType>();
  const { state, undo, redo, handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;
  console.log(state, canRedo, canUndo);

  return (
    <div>
      <Button onClick={handleUndo} disabled={!canUndo}>
        Undo
      </Button>
      <Button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </Button>
      <Button type="submit">Save</Button>
    </div>
  );
}
