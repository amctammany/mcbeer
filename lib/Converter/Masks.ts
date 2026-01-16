import {
  AdjustedFermentationProfileType,
  AdjustedMashProfileType,
  EquipmentProfileType,
  MashProfileType,
  MashStepType,
} from "@/types/Profile";
import { UnitMaskType } from "./adjustUnits";
import { FermentableType, HopType, YeastType } from "@/types/Ingredient";

export const EquipmentProfileMask: UnitMaskType<Partial<EquipmentProfileType>> =
  {
    boilTime: "time",
    brewEfficiency: "percent",
    mashEfficiency: "percent",
    batchVolume: "volume",
    boilVolume: "volume",
    preboilVolume: "volume",
    trubLoss: "volume",
    mashLoss: "volume",
    fermenterLoss: "volume",
    fermenterTopOff: "volume",
  };
export const MashStepMask: UnitMaskType<Partial<MashStepType>> = {
  temperature: "temperature",
  time: "time",
  rampTime: "time",
};
export const MashProfileMask: UnitMaskType<Partial<AdjustedMashProfileType>> = {
  grainTemp: "temperature",
  mashTunTemp: "temperature",
  spargeTemp: "temperature",
  steps: MashStepMask,
};
export const FermentationStepMask: UnitMaskType<Partial<MashStepType>> = {
  temperature: "temperature",
  time: ["time", "days"],
  rampTime: ["time", "days"],
};
export const FermentationProfileMask: UnitMaskType<
  Partial<AdjustedFermentationProfileType>
> = {
  steps: FermentationStepMask,
  "steps.temperature": "temperature",
  "steps.time": ["time", "days"],
  "steps.rampTime": ["time", "days"],
};

export const FermentableMask: UnitMaskType<Partial<FermentableType>> = {
  maxUsage: "percent",
  protein: "percent",
  friability: "percent",
  yield: "percent",
  potential: ["gravity", "PPG"],
  coarseFineDiff: "percent",
  moisture: "percent",
  color: "color",
};

export const HopMask: UnitMaskType<Partial<HopType>> = {
  alpha: "percent",
  beta: "percent",
  humulene: "percent",
  bPinene: "percent",
  myrcene: "percent",
  caryophyllene: "percent",
  farnesene: "percent",
  linalool: "percent",
  geraniol: "percent",
  cohumulone: "percent",
  alphaLow: "percent",
  alphaHigh: "percent",
  betaLow: "percent",
  betaHigh: "percent",
  humuleneLow: "percent",
  humuleneHigh: "percent",
  bPineneLow: "percent",
  bPineneHigh: "percent",
  myrceneLow: "percent",
  myrceneHigh: "percent",
  caryophylleneLow: "percent",
  caryophylleneHigh: "percent",
  farneseneLow: "percent",
  farneseneHigh: "percent",
  linaloolLow: "percent",
  linaloolHigh: "percent",
  geraniolLow: "percent",
  geraniolHigh: "percent",
  cohumuloneLow: "percent",
  cohumuloneHigh: "percent",
};
export const YeastMask: UnitMaskType<Partial<YeastType>> = {
  tolerance: "percent",
  attenuation: "percent",
  attenuationRange: "percent",
  attenuationLow: "percent",
  attenuationHigh: "percent",
  tempRange: "temperature",
  tempLow: "temperature",
  tempHigh: "temperature",
};
/**import { MashProfile, MashStep } from "@prisma/client";
import { FermentableType, HopType, YeastType } from "@/types/Ingredient";

*/
