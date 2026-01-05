import {
  MashStep,
  MashProfile,
  EquipmentProfile,
  WaterProfile,
} from "@/generated/prisma/client";
import { AmountFields, OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";
type MashProfileAmountFieldNames = "spargeTemp" | "grainTemp" | "mashTunTemp";
export type AdjustedMashProfileType = Omit<
  AmountFields<MashProfileType, MashProfileAmountFieldNames>,
  "steps"
> & { steps: AdjustedMashStepType[] };

type MashStepAmountFieldNames = "temperature" | "rampTime" | "time";
export type AdjustedMashStepType = AmountFields<
  MashStepType,
  MashStepAmountFieldNames
>;

export interface MashStepType
  extends Omit<OptionalNullable<MashStep>, "mashProfileId" | "id"> {
  id?: number;
  mashProfileId?: string;
}
export type BaseMashProfile = Omit<
  OptionalNullable<MashProfile>,
  "id" | "userId" | "steps"
> & {
  id?: string;
  userId?: string;
  steps?: MashStepType[];
};
export interface MashProfileType extends BaseMashProfile {
  owner?: Partial<BaseUser>;
  origin?: BaseMashProfile;
  forks?: BaseMashProfile[];
}

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
