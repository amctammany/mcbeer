import mongoose, { Schema } from "mongoose";
import { OtherIngredient } from "@mcbeer/types";
import slugify from "slugify";

export const OtherIngredientSchema = new Schema<OtherIngredient>({
  name: { type: String, required: true },
  country: String,
  description: String,
  slug: String,
});
OtherIngredientSchema.pre("save", function preSave(next) {
  this.slug = slugify(this.name, { lower: true });

  next();
});
export default OtherIngredientSchema;
