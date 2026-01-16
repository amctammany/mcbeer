import { zfd } from "zod-form-data";
import z from "zod";
import {
  FermentableType,
  HopUsage,
  IngredientUsage,
  YeastFlocculation,
  YeastForm,
  YeastType,
} from "@/generated/prisma/client";
import { unitValueSchema } from "./ProfileSchemas";
export const schemas = zfd.formData({
  id: zfd.text(z.string().optional()),
});

export const fermentableSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  userId: zfd.text(z.string().optional()),
  name: zfd.text(),
  type: z.enum(FermentableType).optional().default(FermentableType.Grain),
  usage: z.enum(IngredientUsage).optional().default(IngredientUsage.Mash),
  manufacturer: zfd.text(z.string().optional()),
  description: zfd.text(z.string().optional()),
  country: zfd.text(z.string().optional()),
  notes: zfd.text(z.string().optional()),
  stability: zfd.text(z.string().optional()),
  power: unitValueSchema(z.number().min(0).max(120).optional()),
  maxUsage: unitValueSchema(z.number().min(0).max(100).optional()),
  color: unitValueSchema(z.number().min(0).max(600).optional()),
  potential: unitValueSchema(z.number().min(0).max(2).optional()),
  moisture: unitValueSchema(z.number().min(0).max(100).optional()),
  protein: unitValueSchema(z.number().min(0).max(100).optional()),
  coarseFineDiff: unitValueSchema(z.number().min(0).max(100).optional()),
  friability: unitValueSchema(z.number().min(0).max(100).optional()),
  yield: unitValueSchema(z.number().min(0).max(100).optional()),
  extract: unitValueSchema(z.number().optional()),
});
export const hopSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(z.string().optional()),
  country: zfd.text(z.string().optional()),
  usage: z.enum(HopUsage).optional().default(HopUsage.dual),
  alpha: zfd.numeric(z.number().min(0).max(100).optional()),
  alphaLow: zfd.numeric(z.number().min(0).max(100).optional()),
  alphaHigh: zfd.numeric(z.number().min(0).max(100).optional()),
  beta: zfd.numeric(z.number().min(0).max(40).optional()),
  caryophyllene: zfd.numeric(z.number().min(0).max(40).optional()),
  cohumulone: zfd.numeric(z.number().min(0).max(80).optional()),
  farnesene: zfd.numeric(z.number().min(0).max(50).optional()),
  humulene: zfd.numeric(z.number().min(0).max(80).optional()),
  myrcene: zfd.numeric(z.number().min(0).max(90).optional()),
  totalOil: zfd.numeric(z.number().min(0).max(140).optional()),
  flavor: zfd.text(z.string().optional()),
  purpose: zfd.text(z.string().optional()),
  notes: zfd.text(z.string().optional()),
});

export const yeastSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(),
  slug: zfd.text().optional(),
  description: zfd.text(z.string().optional()),
  manufacturer: zfd.text(z.string()).optional(),
  type: zfd.text(z.enum(YeastType).default(YeastType.Ale)),
  flocculation: zfd
    .numeric(z.enum(YeastFlocculation).default(YeastFlocculation.Medium))
    .optional(),
  form: zfd.numeric(z.enum(YeastForm).default(YeastForm.Dry).optional()),
  tolerance: unitValueSchema(z.number().min(0).max(100).optional()),
  attenuation: unitValueSchema(z.number().min(0).max(100).optional()),
  attenuationLow: unitValueSchema(z.number().optional()),
  attenuationHigh: unitValueSchema(z.number().optional()),
  // attenuationRange: zfd.numeric(z.number().optional()),
  attenuationRange: zfd.repeatable(
    z.array(unitValueSchema(z.number().optional())).length(2)
  ),
  tempRange: zfd.repeatable(
    z.array(unitValueSchema(z.number().optional())).length(2)
  ),
  tempLow: unitValueSchema(z.number().optional()),
  tempHigh: unitValueSchema(z.number().optional()),
  usage: zfd.text(z.string().optional()).optional(),
  notes: zfd.text(z.string().optional()),
});
export default schemas;
/**
 * 
import {
  HopUsage,
  OtherIngredientType,
  YeastFlocculation,
  YeastForm,
  YeastType,
} from "@prisma/client";
export const otherSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(),
  type: z.enum(OtherIngredientType).default(OtherIngredientType.agent),
  description: zfd.text(z.string().optional()),
  country: zfd.text(z.string().optional()),
  notes: zfd.text(z.string().optional()),
});


export type OtherInput = z.infer<typeof otherSchema>;
export type HopInput = z.infer<typeof hopSchema>;
export type FermentableInput = z.infer<typeof fermentableSchema>;
export type YeastInput = z.infer<typeof yeastSchema>;

 */
