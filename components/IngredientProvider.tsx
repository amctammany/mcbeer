"use client";
import { IngredientContext } from "@/contexts/IngredientContext";
import { Style } from "@/generated/prisma/client";

import { FermentableType, HopType, YeastType } from "@/types/Ingredient";
import { EquipmentProfileType, MashProfileType } from "@/types/Profile";
import React, { ReactNode, use, useMemo } from "react";

export default function IngredientProvider({
  children,
  equipPromise,
  stylePromise,
  mashPromise,
  hopPromise,
  fermentablePromise,
  yeastPromise,
}: {
  hopPromise: Promise<HopType[]>;
  stylePromise: Promise<Style[]>;

  equipPromise: Promise<EquipmentProfileType[]>;
  mashPromise: Promise<MashProfileType[]>;
  fermentablePromise: Promise<FermentableType[]>;
  yeastPromise: Promise<YeastType[]>;
  children: ReactNode | ReactNode[];
}) {
  //   const hopPromise = getHopNames()
  //   const fermPromise = getFermentableNames()
  //   const yeastPromise = getYeastNames()
  const store = useMemo(
    () => ({
      equipPromise,
      stylePromise,
      mashPromise,
      hopPromise,
      fermentablePromise,
      yeastPromise,
    }),
    [
      equipPromise,
      stylePromise,
      mashPromise,
      hopPromise,
      fermentablePromise,
      yeastPromise,
    ],
  );
  return <IngredientContext value={store}>{children}</IngredientContext>;
}
