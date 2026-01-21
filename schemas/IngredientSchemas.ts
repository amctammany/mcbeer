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
  userId: zfd.text(z.string().optional()).nullable(),
  forkedFrom: zfd.text(z.string().optional()).nullable(),
  name: zfd.text(),
  type: z.enum(FermentableType).optional().default(FermentableType.Grain),
  usage: z.enum(IngredientUsage).optional().default(IngredientUsage.Mash),
  manufacturer: zfd.text(z.string().optional()).nullable(),
  description: zfd.text(z.string().optional()).nullable(),
  country: zfd.text(z.string().optional()).nullable(),
  notes: zfd.text(z.string().optional()).nullable(),
  stability: zfd.text(z.string().optional()).nullable(),
  power: unitValueSchema(z.number().min(0).max(120).optional()).nullable(),
  maxUsage: unitValueSchema(z.number().min(0).max(100).optional()).nullable(),
  color: unitValueSchema(z.number().min(0).max(600).optional()).nullable(),
  potential: unitValueSchema(z.number().min(0).max(2).optional()).nullable(),
  moisture: unitValueSchema(z.number().min(0).max(100).optional()).nullable(),
  protein: unitValueSchema(z.number().min(0).max(100).optional()).nullable(),
  coarseFineDiff: unitValueSchema(
    z.number().min(0).max(100).optional(),
  ).nullable(),
  friability: unitValueSchema(z.number().min(0).max(100).optional()).nullable(),
  yield: unitValueSchema(z.number().min(0).max(100).optional()).nullable(),
  extract: unitValueSchema(z.number().optional()).nullable(),
});
export const hopSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(z.string().optional()),
  country: zfd.text(z.string().optional()),
  usage: z.enum(HopUsage).optional().default(HopUsage.dual),
  alpha: unitValueSchema(z.number().min(0).max(100).optional()).nullable(),
  alphaLow: unitValueSchema(z.number().min(0).max(1000).optional()).nullable(),
  alphaHigh: unitValueSchema(z.number().min(0).max(1000).optional()).nullable(),
  beta: unitValueSchema(z.number().min(0).max(40).optional()).nullable(),
  caryophyllene: unitValueSchema(
    z.number().min(0).max(40).optional(),
  ).nullable(),
  cohumulone: unitValueSchema(z.number().min(0).max(80).optional()).nullable(),
  farnesene: unitValueSchema(z.number().min(0).max(50).optional()).nullable(),
  humulene: unitValueSchema(z.number().min(0).max(80).optional()).nullable(),
  myrcene: unitValueSchema(z.number().min(0).max(90).optional()).nullable(),
  totalOil: unitValueSchema(z.number().min(0).max(140).optional()).nullable(),
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
    z.array(unitValueSchema(z.number().optional())).length(2),
  ),
  tempRange: zfd.repeatable(
    z.array(unitValueSchema(z.number().optional())).length(2),
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
