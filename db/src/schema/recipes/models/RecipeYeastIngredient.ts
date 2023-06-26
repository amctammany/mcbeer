import { YeastIngredient } from "@mcbeer/types";
import mongoose, { Document, Schema } from "mongoose";
export interface IYeastIngredient {
  ingredient: YeastIngredient;
  amount: number;
  attenuation: number;
}
export const RecipeYeastIngredientSchema = new Schema<IYeastIngredient & any>(
  {
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "YeastIngredient",
    },
    ingredientId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    attenuation: Number,
  },
  { id: false }
);
