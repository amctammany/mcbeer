"use client";
import { getFermentableNames } from "@/app/(ingredients)/fermentables/queries";
import { getHopNames } from "@/app/(ingredients)/hops/queries";
import { getYeastNames } from "@/app/(ingredients)/yeasts/queries";
import { IngredientContext } from "@/contexts/IngredientContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/browser";
import {
  BaseFermentableType,
  BaseHopType,
  BaseYeastType,
  FermentableType,
  HopType,
  YeastType,
} from "@/types/Ingredient";
import React, { ReactNode, use, useMemo } from "react";

export default function IngredientProvider({
  children,
  hopPromise,
  fermPromise,
  yeastPromise,
}: {
  hopPromise: Promise<HopType[]>;
  fermPromise: Promise<FermentableType[]>;
  yeastPromise: Promise<YeastType[]>;
  children: ReactNode | ReactNode[];
}) {
  //   const hopPromise = getHopNames()
  //   const fermPromise = getFermentableNames()
  //   const yeastPromise = getYeastNames()
  const store = useMemo(
    () => ({
      hopPromise,
      fermPromise,
      yeastPromise,
    }),
    [hopPromise, fermPromise, yeastPromise],
  );
  return <IngredientContext value={store}>{children}</IngredientContext>;
}
