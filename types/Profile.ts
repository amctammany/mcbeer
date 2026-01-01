import { EquipmentProfile } from "@/generated/prisma/client";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";

export type BaseEquipmentProfile = Omit<
  OptionalNullable<EquipmentProfile>,
  "id"
> & {
  id?: string;
};

export interface EquipmentProfileType extends BaseEquipmentProfile {
  owner?: BaseUser;
  origin?: BaseEquipmentProfile;
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
