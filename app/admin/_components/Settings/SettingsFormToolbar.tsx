"use client";
import { RevisionContext } from "@/contexts/RevisionContext";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useRouter } from "next/navigation";
import { ExtendedUser } from "@/types/User";

export default function SettingsFormToolbar() {
  const formContext = useFormContext<ExtendedUser>();
  const { state, undo, redo, handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;
  const router = useRouter();

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
