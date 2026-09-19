"use client";
import { Brewery, BreweryUser, User } from "@/generated/prisma/browser";

import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import { BreweryForm } from "@/app/brewery/_components/BreweryForm/BreweryForm";
import { ExtendedUser } from "@/types/User";
import BreweryEditorToolbar from "./BreweryEditorToolbar";
import BreweryFormContainer from "../BreweryForm/BreweryFormContainer";
import { BreweryType } from "@/types/Brewery";
import { BreweryModals } from "@/app/brewery/_components/BreweryForm/BreweryModals";

export type BreweryProps<S = unknown> = {
  action: (prev: S, formData: FormData) => S | Promise<S>;
  // user: BreweryUser;
  src: BreweryType;
};
export function BreweryEditor({ src, action }: BreweryProps) {
  return (
    <BreweryFormContainer
      src={src}
      action={action}
      toolbar={<BreweryEditorToolbar src={src} />}
      // modals={<BreweryModals key="moals" breweryId={src.id} />}
    >
      <BreweryForm />
    </BreweryFormContainer>
  );
}

export default BreweryEditor;
