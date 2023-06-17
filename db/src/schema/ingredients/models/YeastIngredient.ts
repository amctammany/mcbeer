import mongoose, { Document, Schema } from "mongoose";
import { YeastIngredient } from "@mcbeer/types";

export const YeastIngredientSchema = new Schema<YeastIngredient>({
  name: { type: String, required: true },
  country: String,
  description: String,
  slug: String,

  tolerance: Number,
  attenuation: Number,
  flocculation: {
    type: String,
    enum: ["low", "medium", "high"],
  },
});

export default YeastIngredientSchema;
