import { Brewery, BreweryUser, User } from "@/generated/prisma/browser";

import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import { BreweryForm } from "@/app/brewery/_components/BreweryForm/BreweryForm";
import { ExtendedUser } from "@/types/User";
import BreweryEditorToolbar from "./BreweryEditorToolbar";
import BreweryFormContainer from "../BreweryForm/BreweryFormContainer";
import { BreweryType } from "@/types/Brewery";

export type BreweryProps<S = unknown> = {
  action: (prev: S, formData: FormData) => S | Promise<S>;
  // user: BreweryUser;
  brewery: BreweryType;
};
export function BreweryEditor({ brewery, action }: BreweryProps) {
  return (
    <BreweryFormContainer
      src={brewery}
      action={action}
      toolbar={<BreweryEditorToolbar src={brewery} />}
    >
      <BreweryForm />
    </BreweryFormContainer>
  );
}

export default BreweryEditor;
