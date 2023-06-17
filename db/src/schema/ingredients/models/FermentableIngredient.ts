import mongoose, { Schema } from "mongoose";
//import { FermentableIngredient } from "@lnk/types";
type FermentableIngredientType = any;
export const FermentableIngredientSchema =
  new Schema<FermentableIngredientType>({
    name: { type: String, required: true },
    country: String,
    description: String,
    slug: String,

    power: Number,
    maxUsage: Number,
    color: Number,
    potential: Number,
    stability: String,
  });
export default FermentableIngredientSchema;
