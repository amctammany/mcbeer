import mongoose, { Schema } from "mongoose";
//import { OtherIngredient } from "@lnk/types";
type OtherIngredientType = any;

export const OtherIngredientSchema = new Schema<OtherIngredientType>({
  name: { type: String, required: true },
  country: String,
  description: String,
  slug: String,
});

export default OtherIngredientSchema;
