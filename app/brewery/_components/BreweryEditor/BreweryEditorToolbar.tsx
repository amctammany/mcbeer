"use client";
import { RevisionContext } from "@/contexts/RevisionContext";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import { BreweryType } from "@/types/Brewery";

export default function BreweryEditorToolbar({ src }: { src: BreweryType }) {
  const formContext = useFormContext<BreweryType>();
  const { state, undo, redo, handleRedo, handleUndo, canRedo, canUndo } =
    useContext(RevisionContext)!;
  const router = useRouter();

  return (
    <TopBar
      breadcrumbs={[
        { title: "Brewery", url: "/brewery" },
        { title: src.name!, url: `/brewery/${src.id}` },
        { title: "Edit" },
      ]}
    >
      <ButtonGroup>
        <ButtonGroup>
          <Button type="button" onClick={handleUndo} disabled={!canUndo}>
            Undo
          </Button>
          <Button type="button" onClick={handleRedo} disabled={!canRedo}>
            Redo
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            type="button"
            variant="destructive"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </ButtonGroup>
      </ButtonGroup>
    </TopBar>
  );
}
