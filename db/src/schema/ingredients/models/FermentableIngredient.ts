import mongoose, { Schema } from "mongoose";
import { FermentableIngredient } from "@mcbeer/types";
import slugify from "slugify";
//type FermentableIngredientType = any;
export const FermentableIngredientSchema = new Schema<FermentableIngredient>({
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
FermentableIngredientSchema.pre("save", function preSave(next) {
  this.slug = slugify(this.name, { lower: true });

  next();
});

export default FermentableIngredientSchema;
