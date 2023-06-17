import mongoose, { Schema } from "mongoose";
//import { OtherIngredient } from "@lnk/types";
type OtherIngredientType = any;

export const OtherIngredientSchema = new Schema<OtherIngredientType>({
  name: String,
});

export const OtherIngredient = mongoose.model(
  "OtherIngredient",
  OtherIngredientSchema
);
export default OtherIngredientSchema;
