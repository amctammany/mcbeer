import mongoose, { Document, Schema } from "mongoose";
//import { YeastIngredient, Ingredient as IngredientType } from "@lnk/types";
type Ingredient = any;
type YeastIngredientType = any;

export const YeastIngredientSchema = new Schema<YeastIngredientType>({
  tolerance: Number,
  attenuation: Number,
  flocculation: {
    type: String,
    enum: ["low", "medium", "high"],
  },
});

export default YeastIngredientSchema;
