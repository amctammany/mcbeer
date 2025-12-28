import { zfd } from "zod-form-data";
import z from "zod";
export const schemas = zfd.formData({
  id: zfd.text(z.string().optional()),
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
export const fermentableSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  userId: zfd.text(z.string().optional()),
  name: zfd.text(),
  manufacturer: zfd.text(z.string().optional()),
  description: zfd.text(z.string().optional()),
  country: zfd.text(z.string().optional()),
  notes: zfd.text(z.string().optional()),
  stability: zfd.text(z.string().optional()),
  power: zfd.numeric(z.number().min(0).max(120).optional()),
  maxUsage: zfd.numeric(z.number().min(0).max(100).optional()),
  color: zfd.numeric(z.number().min(0).max(600).optional()),
  potential: zfd.numeric(z.number().min(0).max(2).optional()),
  moisture: zfd.numeric(z.number().min(0).max(100).optional()),
  protein: zfd.numeric(z.number().min(0).max(100).optional()),
  coarseFineDiff: zfd.numeric(z.number().min(0).max(100).optional()),
  friability: zfd.numeric(z.number().min(0).max(100).optional()),
  yield: zfd.numeric(z.number().min(0).max(100).optional()),
  extract: zfd.numeric(z.number().optional()),
});

export const otherSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(),
  type: z.enum(OtherIngredientType).default(OtherIngredientType.agent),
  description: zfd.text(z.string().optional()),
  country: zfd.text(z.string().optional()),
  notes: zfd.text(z.string().optional()),
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
  cohumulone: zfd.numeric(z.number().min(0).max(40).optional()),
  farnesene: zfd.numeric(z.number().min(0).max(40).optional()),
  humulene: zfd.numeric(z.number().min(0).max(40).optional()),
  myrcene: zfd.numeric(z.number().min(0).max(40).optional()),
  totalOil: zfd.numeric(z.number().min(0).max(40).optional()),
  flavor: zfd.text(z.string().optional()),
  purpose: zfd.text(z.string().optional()),
  notes: zfd.text(z.string().optional()),
});

export const yeastSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(z.string().optional()),
  manufacturer: zfd.text(z.string().optional()),
  type: zfd.text(z.nativeEnum(YeastType).optional().default(YeastType.Ale)),
  flocculation: zfd.numeric(z.enum(YeastFlocculation).optional()),
  form: zfd.numeric(z.enum(YeastForm).optional()),
  tolerance: zfd.numeric(z.number().min(0).max(1).optional()),
  attenuation: zfd.numeric(z.number().min(0).max(1).optional()),
  tempLow: zfd.numeric(z.number().optional()),
  tempHigh: zfd.numeric(z.number().optional()),
  usage: zfd.text(z.string().optional()),
  notes: zfd.text(z.string().optional()),
});

export type OtherInput = z.infer<typeof otherSchema>;
export type HopInput = z.infer<typeof hopSchema>;
export type FermentableInput = z.infer<typeof fermentableSchema>;
export type YeastInput = z.infer<typeof yeastSchema>;

 */
