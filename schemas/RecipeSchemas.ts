import z from "zod";
import { zfd } from "zod-form-data";
import { unitValueSchema } from "./ProfileSchemas";

export const recipeSchema = zfd.formData({
  //id: zfd.numeric(z.number()),
  id: zfd.text(z.string().optional()),
  userId: zfd.text(),
  name: zfd.text(),
  description: zfd.text(z.string().optional()),
  mashProfileId: zfd.text(z.string().optional()),
  waterProfileId: zfd.text(z.string().optional()),
  styleId: zfd.numeric(z.number().optional()),
  //styleIdentifer: zfd.text(z.string().optional()),
  equipmentProfileId: zfd.text(z.string().optional()),
  boilTime: unitValueSchema(z.number().min(0).optional()),
  batchVolume: unitValueSchema(z.number().min(0).optional()),
  mashEfficiency: unitValueSchema(
    z.number().min(0).max(100).optional().default(65),
  ).optional(),
  brewEfficiency: unitValueSchema(
    z.number().min(0).max(100).optional().default(60),
  ),
  calcium: zfd.numeric(z.number().optional()),
  magnesium: zfd.numeric(z.number().optional()),
  sodium: zfd.numeric(z.number().optional()),
  chloride: zfd.numeric(z.number().optional()),
  sulfate: zfd.numeric(z.number().optional()),
  bicarbonate: zfd.numeric(z.number().optional()),
});
