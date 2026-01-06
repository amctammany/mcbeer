import {
  AdjustedFermentationProfileType,
  AdjustedMashProfileType,
  EquipmentProfileType,
  MashProfileType,
  MashStepType,
} from "@/types/Profile";
import { UnitMaskType } from "./adjustUnits";
import { PreferencesInput } from "@/app/admin/preferences/PreferencesForm";
import { FermentableType } from "@/types/Ingredient";

export const PreferencesMask: UnitMaskType<Partial<PreferencesInput>> = {
  //  size: "volume",
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
  Partial<AdjustedFermentationProfileType>
> = {
  steps: FermentationStepMask,
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

/**import { MashProfile, MashStep } from "@prisma/client";
import { FermentableType, HopType, YeastType } from "@/types/Ingredient";


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
export const YeastMask: UnitMaskType<Partial<YeastType>> = {
  attenuation: "percent",
  attenuationLow: "percent",
  attenuationHigh: "percent",
  tempLow: "temperature",
  tempHigh: "temperature",
};
*/
