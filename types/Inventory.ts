import {
  FermentableInventoryItem,
  HopInventoryItem,
  Inventory,
  YeastInventoryItem,
} from "@/generated/prisma/browser";
import { BaseFermentableType, BaseHopType, BaseYeastType } from "./Ingredient";
import { OptionalNullable } from "@/lib/utils";

export interface HopInventoryItemType extends OptionalNullable<HopInventoryItem> {
  type: "Hop";
  hop: BaseHopType;
}
export interface YeastInventoryItemType extends OptionalNullable<YeastInventoryItem> {
  type: "Yeast";
  yeast: BaseYeastType;
}
export interface FermentableInventoryItemType extends OptionalNullable<FermentableInventoryItem> {
  type: "Fermentable";
  fermentable: BaseFermentableType;
}

export type InventoryItemType = "Hop" | "Yeast" | "Fermentable";
export type InventoryInputStatus = "RAW" | "ITEMIZED";
export type InventoryRawInput = {
  id: string;
  userId: string;
  names?: string;
  values?: string;
};
export type InventoryItemInput = {
  type: InventoryItemType;
  id: string;
  name: string;
  value: string | number;
};
export type InventoryItemizedInput = {
  id: string;
  userId: string;
  items?: InventoryItemInput[];
};
export type InventoryInput = InventoryRawInput | InventoryItemizedInput;

export type InventoryRawInputType = {
  status: "RAW";
  data?: InventoryRawInput;
  errors?: any;
};
export type InventoryItemizedInputType = {
  status: "ITEMIZED";
  data?: InventoryItemizedInput;
  errors?: any;
};
export type InventoryInputType =
  | InventoryRawInputType
  | InventoryItemizedInputType;
export interface InventoryType extends Inventory {
  hopInventoryItems: HopInventoryItemType[];
  yeastInventoryItems: YeastInventoryItemType[];
  fermentableInventoryItems: FermentableInventoryItemType[];
}

export type InventoryListItemType =
  | HopInventoryItemType
  | YeastInventoryItemType
  | FermentableInventoryItemType;
