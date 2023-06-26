import mongoose, { Document, Schema } from "mongoose";
import { YeastIngredient } from "@mcbeer/types";
import slugify from "slugify";

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
YeastIngredientSchema.pre("save", function preSave(next) {
  this.slug = slugify(this.name, { lower: true });

  next();
});

export default YeastIngredientSchema;
