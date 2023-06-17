import mongoose, { Schema } from "mongoose";
import { OtherIngredient } from "@mcbeer/types";

export const OtherIngredientSchema = new Schema<OtherIngredient>({
  name: { type: String, required: true },
  country: String,
  description: String,
  slug: String,
});

export default OtherIngredientSchema;
