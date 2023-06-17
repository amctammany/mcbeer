import mongoose, { Document, Schema } from "mongoose";
//import { YeastIngredient, Ingredient as IngredientType } from "@lnk/types";
type Ingredient = any;
type YeastIngredientType = any;

export const YeastIngredientSchema = new Schema<YeastIngredientType>({
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
