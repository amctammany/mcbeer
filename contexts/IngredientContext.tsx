"use client";
import { EquipmentProfile, Style } from "@/generated/prisma/client";
import { FermentableType, HopType, YeastType } from "@/types/Ingredient";
import { EquipmentProfileType, MashProfileType } from "@/types/Profile";
import { createContext } from "react";
import { FieldValues } from "react-hook-form";
export type IngredientStoreType = {
  hopPromise: Promise<HopType[]>;
  stylePromise: Promise<Style[]>;
  equipPromise: Promise<EquipmentProfileType[]>;
  mashPromise: Promise<MashProfileType[]>;
  fermPromise: Promise<FermentableType[]>;
  yeastPromise: Promise<YeastType[]>;
};
export type IngredientContextType = {
  store: IngredientStoreType;
};
export const IngredientContext = createContext<IngredientStoreType>({
  hopPromise: Promise.resolve([] as HopType[]),
  mashPromise: Promise.resolve([] as MashProfileType[]),
  stylePromise: Promise.resolve([] as Style[]),
  equipPromise: Promise.resolve([] as EquipmentProfileType[]),
  fermPromise: Promise.resolve([] as FermentableType[]),
  yeastPromise: Promise.resolve([] as YeastType[]),
});
