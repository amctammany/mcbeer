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
import {
  BaseFermentableIngredientType,
  BaseHopIngredientType,
  BaseYeastIngredientType,
  RecipeType,
} from "@/types/Recipe";
import { BaseVesselType, BreweryType } from "@/types/Brewery";

export const VesselMask: UnitMaskType<Partial<BaseVesselType>> = {
  volume: "volume",
};
export const BreweryMask: UnitMaskType<Partial<BreweryType>> = {
  vessels: VesselMask,
};

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
export const FermentableIngredientMask: UnitMaskType<
  Partial<BaseFermentableIngredientType>
> = {
  amount: "fermentableMass",
  color: "color",
};
export const YeastIngredientMask: UnitMaskType<
  Partial<BaseYeastIngredientType>
> = {
  amount: "yeastMass",
  attenuation: ["percent", "percent"],
};
export const HopIngredientMask: UnitMaskType<Partial<BaseHopIngredientType>> = {
  amount: "hopMass",
  duration: "time",
  alpha: ["percent", "percent"],
};
export const RecipeMask: UnitMaskType<Partial<RecipeType>> = {
  boilTime: "time",
  batchVolume: "volume",
  brewEfficiency: "percent",
  mashEfficiency: "percent",
  boilVolume: "volume",
  preboilVolume: "volume",
  trubLoss: "volume",
  mashLoss: "volume",
  fermenterLoss: "volume",
  yeastIngredients: YeastIngredientMask,
  hopIngredients: HopIngredientMask,
  fermentableIngredients: FermentableIngredientMask,
};
export const FermentableMask: UnitMaskType<Partial<FermentableType>> = {
  maxUsage: ["percent", "percent"],
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
  alpha: ["percent", "percent"],
  beta: ["percent", "percent"],
  humulene: ["percent", "percent"],
  bPinene: ["percent", "percent"],
  myrcene: ["percent", "percent"],
  caryophyllene: ["percent", "percent"],
  farnesene: ["percent", "percent"],
  linalool: ["percent", "percent"],
  geraniol: ["percent", "percent"],
  cohumulone: ["percent", "percent"],
  alphaLow: ["percent", "percent"],
  alphaHigh: ["percent", "percent"],
  betaLow: ["percent", "percent"],
  betaHigh: ["percent", "percent"],
  humuleneLow: ["percent", "percent"],
  humuleneHigh: ["percent", "percent"],
  bPineneLow: ["percent", "percent"],
  bPineneHigh: ["percent", "percent"],
  myrceneLow: ["percent", "percent"],
  myrceneHigh: ["percent", "percent"],
  caryophylleneLow: ["percent", "percent"],
  caryophylleneHigh: ["percent", "percent"],
  farneseneLow: ["percent", "percent"],
  farneseneHigh: ["percent", "percent"],
  linaloolLow: ["percent", "percent"],
  linaloolHigh: ["percent", "percent"],
  geraniolLow: ["percent", "percent"],
  geraniolHigh: ["percent", "percent"],
  cohumuloneLow: ["percent", "percent"],
  cohumuloneHigh: ["percent", "percent"],
  totalOil: ["percent", "percent"],
  totalOilLow: ["percent", "percent"],
  totalOilHigh: ["percent", "percent"],
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
