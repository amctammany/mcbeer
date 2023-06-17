import mongoose, { Schema } from "mongoose";
//import { FermentableIngredient } from "@lnk/types";
type FermentableIngredientType = any;
const FermentableIngredientSchema = new Schema<FermentableIngredientType>({
  name: String,
  power: Number,
  maxUsage: Number,
  color: Number,
  potential: Number,
  stability: String,
});
export const FermentableIngredient = mongoose.model(
  "FermentableIngredient",
  FermentableIngredientSchema
);

export default FermentableIngredientSchema;
