import { EquipmentProfile, WaterProfile } from "@/generated/prisma/client";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";

export type BaseWaterProfile = Omit<
  OptionalNullable<WaterProfile>,
  "id" | "userId"
> & {
  id?: string;
  userId?: string;
};
export interface WaterProfileType extends BaseWaterProfile {
  owner?: Partial<BaseUser>;
  origin?: BaseWaterProfile;
  forks?: BaseWaterProfile[];
}

export type BaseEquipmentProfile = Omit<
  OptionalNullable<EquipmentProfile>,
  "id" | "userId"
> & {
  id?: string;
  userId?: string;
};

export interface EquipmentProfileType extends BaseEquipmentProfile {
  owner?: Partial<BaseUser>;
  origin?: BaseEquipmentProfile;
  forks?: BaseEquipmentProfile[];
}
type EquipmentProfileAmountFieldNames =
  | "boilTime"
  | "boilVolume"
  | "preboilVolume"
  | "brewEfficiency"
  | "mashEfficiency"
  | "batchVolume"
  | "trubLoss"
  | "mashLoss"
  | "fermenterLoss";
export type AdjustedEquipmentProfileType = AmountFields<
  EquipmentProfileType,
  EquipmentProfileAmountFieldNames
>;
