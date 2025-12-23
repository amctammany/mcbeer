"use client";
import { RevisionContext } from "@/contexts/RevisionContext";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { UserType } from "./SettingsForm";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useRouter } from "next/navigation";

export default function SettingsFormToolbar() {
  const formContext = useFormContext<UserType>();
  const { state, undo, redo, handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;
  const router = useRouter();
  console.log(state, canRedo, canUndo);

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button onClick={handleUndo} disabled={!canUndo}>
          Undo
        </Button>
        <Button onClick={handleRedo} disabled={!canRedo}>
          Redo
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
