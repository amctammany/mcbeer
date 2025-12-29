import { EquipmentProfileType } from "@/types/Profile";
import { UnitMaskType } from "./adjustUnits";

export const EquipmentProfileMask: UnitMaskType<Partial<EquipmentProfileType>> =
  {
    boilTime: "time",
    /**
    brewEfficiency: "percent",
    mashEfficiency: "percent",
    batchVolume: "volume",
    boilVolume: "volume",
    preboilVolume: "volume",
    trubLoss: "volume",
    mashLoss: "volume",
    fermenterLoss: "volume",
    fermenterTopOff: "volume",
 */
  };

/**import { MashProfile, MashStep } from "@prisma/client";
import { FermentableType, HopType, YeastType } from "@/types/Ingredient";
export const MashStepMask: UnitMaskType<Partial<MashStepType>> = {
  temperature: "temperature",
  time: "time",
  rampTime: "time",
};
export const MashProfileMask: UnitMaskType<Partial<MashProfileType>> = {
  grainTemp: "temperature",
  mashTunTemp: "temperature",
  spargeTemp: "temperature",
  steps: MashStepMask,
};

export const HopMask: UnitMaskType<Partial<HopType>> = {
  alpha: "percent",
  alphaLow: "percent",
  alphaHigh: "percent",
  beta: "percent",
  betaLow: "percent",
  betaHigh: "percent",
  humulene: "percent",
  humuleneLow: "percent",
  humuleneHigh: "percent",
  bPinene: "percent",
  bPineneLow: "percent",
  bPineneHigh: "percent",
  myrcene: "percent",
  myrceneLow: "percent",
  myrceneHigh: "percent",
  caryophyllene: "percent",
  caryophylleneLow: "percent",
  caryophylleneHigh: "percent",
  farnesene: "percent",
  farneseneLow: "percent",
  farneseneHigh: "percent",
  linalool: "percent",
  linaloolLow: "percent",
  linaloolHigh: "percent",
  geraniol: "percent",
  geraniolLow: "percent",
  geraniolHigh: "percent",
  cohumulone: "percent",
  cohumuloneLow: "percent",
  cohumuloneHigh: "percent",
};

export const FermentableMask: UnitMaskType<Partial<FermentableType>> = {
  maxUsage: "percent",
  protein: "percent",
  friability: "percent",
  coarseFineDiff: "percent",
  moisture: "percent",
  color: "color",
};

export const YeastMask: UnitMaskType<Partial<YeastType>> = {
  attenuation: "percent",
  attenuationLow: "percent",
  attenuationHigh: "percent",
  tempLow: "temperature",
  tempHigh: "temperature",
};
*/
