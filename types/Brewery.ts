import { Brewery, BreweryUser } from "@/generated/prisma/browser";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";
import { Vessel } from "@/generated/prisma/client";

export interface BaseBreweryUserType extends OptionalNullable<BreweryUser> {}
export interface BreweryUserType extends BreweryUser {
  user: Partial<BaseUser>;
  brewery: BreweryType;
}
export interface BaseBreweryType extends Omit<
  OptionalNullable<Brewery>,
  "id" | "name"
> {
  id?: string;
  name?: string;
}

export interface BreweryType extends BaseBreweryType {
  users?: Partial<BreweryUserType>[];
  vessels: BaseVesselType[];
}

export interface BaseVesselType extends Omit<
  OptionalNullable<Vessel>,
  "id" | "name" | "brewery"
> {
  id?: string;
  name?: string;
  brewery?: BaseBreweryType;
}
const t = {} as AdjustedVesselType;
t.volume;
export type VesselAmountFieldNames = "volume";
export type AdjustedVesselType = AmountFields<
  BaseVesselType,
  VesselAmountFieldNames
>;
export type AdjustedBreweryType = BaseBreweryType & {
  vessels: AdjustedVesselType[];
};
