import {
  AdjustedFermentationProfileType,
  AdjustedMashProfileType,
  EquipmentProfileType,
  MashProfileType,
  MashStepType,
} from "@/types/Profile";
import { UnitMaskType } from "./adjustUnits";
import { FermentableType, HopType, YeastType } from "@/types/Ingredient";
import { FieldPath, FieldValues, Path } from "react-hook-form";
import { RecipeType } from "@/types/Recipe";

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
  Partial<AdjustedFermentationProfileType> & {
    "steps.temperature": "temperature";
    "steps.time": ["time", "days"];
    "steps.rampTime": ["time", "days"];
  }
> = {
  steps: FermentationStepMask,
  "steps.temperature": "temperature",
  "steps.time": ["time", "days"],
  "steps.rampTime": ["time", "days"],
};

export const RecipeMask: UnitMaskType<Partial<RecipeType>> = {
  boilTime: "time",
};
export const FermentableMask: UnitMaskType<Partial<FermentableType>> = {
  maxUsage: "percent",
  protein: "percent",
  friability: "percent",
  yield: "percent",
  power: "percent",
  potential: ["gravity", "PPG"],
  coarseFineDiff: "percent",
  moisture: "percent",
  color: "color",
};

export const HopMask: UnitMaskType<Partial<HopType>> = {
  alpha: ["percent", "number"],
  beta: ["percent", "number"],
  humulene: ["percent", "number"],
  bPinene: ["percent", "number"],
  myrcene: ["percent", "number"],
  caryophyllene: ["percent", "number"],
  farnesene: ["percent", "number"],
  linalool: ["percent", "number"],
  geraniol: ["percent", "number"],
  cohumulone: ["percent", "number"],
  alphaLow: ["percent", "number"],
  alphaHigh: ["percent", "number"],
  betaLow: ["percent", "number"],
  betaHigh: ["percent", "number"],
  humuleneLow: ["percent", "number"],
  humuleneHigh: ["percent", "number"],
  bPineneLow: ["percent", "number"],
  bPineneHigh: ["percent", "number"],
  myrceneLow: ["percent", "number"],
  myrceneHigh: ["percent", "number"],
  caryophylleneLow: ["percent", "number"],
  caryophylleneHigh: ["percent", "number"],
  farneseneLow: ["percent", "number"],
  farneseneHigh: ["percent", "number"],
  linaloolLow: ["percent", "number"],
  linaloolHigh: ["percent", "number"],
  geraniolLow: ["percent", "number"],
  geraniolHigh: ["percent", "number"],
  cohumuloneLow: ["percent", "number"],
  cohumuloneHigh: ["percent", "number"],
  totalOil: ["percent", "number"],
  totalOilLow: ["percent", "number"],
  totalOilHigh: ["percent", "number"],
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

export function getInMask<T extends FieldValues>(
  mask: UnitMaskType<T>,
  path: FieldPath<T>,
) {
  const crumbs = path.split(".");
  const res = crumbs.reduce((acc, p) => {
    if (!Number.isNaN(parseInt(p))) return acc;
    return acc[p];
  }, mask as any);
  return res;
}
