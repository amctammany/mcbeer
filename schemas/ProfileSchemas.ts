import { $Enums } from "@/generated/prisma/client";
import z from "zod";
import { zfd } from "zod-form-data";
export const unitValueSchema = (numSchema: any = z.number()) =>
  z.object({
    value: zfd.numeric(numSchema),
    unit: zfd.text(z.string().optional()),
  });
export const equipmentProfileSchema = zfd.formData({
  //userId: zfd.text(),
  id: zfd.text(z.string().optional()),
  forkedFrom: zfd.text(z.string().optional()).nullable(),
  userId: zfd.text(z.string().optional()).nullable(),
  name: zfd.text(),
  description: zfd.text(),
  brewEfficiency: unitValueSchema(z.number().min(0).default(68)),
  mashEfficiency: unitValueSchema(z.number().min(0).default(68)),
  batchVolume: unitValueSchema(z.number().min(0).default(5)),
  boilTime: unitValueSchema(),
  // boilTime: zfd.numeric(z.number().min(0).default(60)),
  boilVolume: unitValueSchema(z.number().min(0).optional()),
  preboilVolume: unitValueSchema(z.number().min(0).optional()),
  boilOffRate: zfd.numeric(z.number().min(0).default(5)),
  trubLoss: unitValueSchema(z.number().min(0).default(0)),
  mashLoss: unitValueSchema(z.number().min(0).default(0)),
  fermenterLoss: unitValueSchema(z.number().min(0).default(0)),
  grainAbsorption: zfd.numeric(z.number().min(0).default(1)),
  waterGrainRatio: zfd.numeric(z.number().min(0).default(1)),
});

export const waterProfileSchema = zfd.formData({
  //userId: zfd.text(),
  id: zfd.text(z.string().optional()),
  forkedFrom: zfd.text(z.string().optional()),
  userId: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(),

  calcium: unitValueSchema(z.number().min(0)),
  magnesium: unitValueSchema(z.number().min(0)),
  sodium: unitValueSchema(z.number().min(0)),
  sulfate: unitValueSchema(z.number().min(0)),
  chloride: unitValueSchema(z.number().min(0)),
  bicarbonate: unitValueSchema(z.number().min(0)),
});
export const fermentationStepSchema = zfd.formData({
  fermentationProfileId: zfd.text(z.string().optional()),
  index: zfd.numeric(),
  id: zfd.numeric(z.number().optional()),
  name: zfd.text(z.string().optional()),
  temperature: unitValueSchema(z.number()),
  time: unitValueSchema(z.number()),
  rampTime: unitValueSchema(z.number().default(0)),
});
export const fermentationProfileSchema = zfd.formData({
  //userId: zfd.text(),
  id: zfd.text(z.string().optional()),
  forkedFrom: zfd.text(z.string().optional()),
  userId: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(),
  steps: zfd.repeatableOfType(fermentationStepSchema).default([]),
});

export const mashStepSchema = zfd.formData({
  mashProfileId: zfd.text(z.string().optional()),
  index: zfd.numeric(),
  id: zfd.numeric(z.number().optional()),
  name: zfd.text(z.string().optional()),
  temperature: unitValueSchema(z.number()),
  time: unitValueSchema(z.number()),
  rampTime: unitValueSchema(z.number().default(0)),
  type: z.enum($Enums.MashStepType).default($Enums.MashStepType.temperature),
});
export const mashProfileSchema = zfd.formData({
  //userId: zfd.text(),
  id: zfd.text(z.string().optional()),
  forkedFrom: zfd.text(z.string().optional()),
  userId: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(),
  mashTunTemp: unitValueSchema(z.number().default(72)).optional(),
  grainTemp: unitValueSchema(z.number().default(72)).optional(),
  spargeTemp: unitValueSchema(z.number().default(72)).optional(),
  steps: zfd.repeatableOfType(mashStepSchema).default([]),
});
