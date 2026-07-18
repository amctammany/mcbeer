"use client";
import { FermentableType, HopType, YeastType } from "@/types/Ingredient";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";
export type IngredientStoreType = {
  hopPromise: Promise<HopType[]>;
  fermPromise: Promise<FermentableType[]>;
  yeastPromise: Promise<YeastType[]>;
};
export type IngredientContextType = {
  store: IngredientStoreType;
};
export const IngredientContext = createContext<IngredientStoreType>({
  hopPromise: Promise.resolve([] as HopType[]),
  fermPromise: Promise.resolve([] as FermentableType[]),
  yeastPromise: Promise.resolve([] as YeastType[]),
});
