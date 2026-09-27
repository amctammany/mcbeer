"use client";
import { IngredientContext } from "@/contexts/IngredientContext";
import { Style } from "@/generated/prisma/client";

import { FermentableType, HopType, YeastType } from "@/types/Ingredient";
import {
  EquipmentProfileType,
  FermentationProfileType,
  MashProfileType,
  WaterProfileType,
} from "@/types/Profile";
import React, { ReactNode, use, useMemo } from "react";

export default function IngredientProvider({
  children,
  equipPromise,
  stylePromise,
  waterPromise,
  fermentationPromise,
  mashPromise,
  hopPromise,
  fermentablePromise,
  yeastPromise,
}: {
  hopPromise: Promise<HopType[]>;
  stylePromise: Promise<Style[]>;
  fermentationPromise: Promise<FermentationProfileType[]>;
  waterPromise: Promise<WaterProfileType[]>;
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
      waterPromise,
      mashPromise,
      fermentablePromise,
      hopPromise,
      fermentationPromise,
      yeastPromise,
    }),
    [
      equipPromise,
      stylePromise,
      mashPromise,
      waterPromise,
      fermentationPromise,
      hopPromise,
      fermentablePromise,
      yeastPromise,
    ],
  );
  return <IngredientContext value={store}>{children}</IngredientContext>;
}
