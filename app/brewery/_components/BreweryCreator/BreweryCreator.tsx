import { Brewery, User } from "@/generated/prisma/browser";

import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import {
  BreweryFormContainer,
  BreweryForm,
} from "@/app/brewery/_components/BreweryForm/BreweryForm";
import { ExtendedUser } from "@/types/User";
import BreweryCreatorToolbar from "./BreweryCreatorToolbar";

export type BreweryProps<S = unknown> = {
  action: (prev: S, formData: FormData) => S | Promise<S>;
  brewery: Brewery;
};
export function BreweryCreator({ brewery, action }: BreweryProps) {
  return (
    <BreweryFormContainer
      brewery={brewery}
      action={action}
      toolbar={<BreweryCreatorToolbar />}
    >
      <BreweryForm />
    </BreweryFormContainer>
  );
}

export default BreweryCreator;
