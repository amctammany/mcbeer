import { EnumRecipeHopIngredientsUsage, HopIngredient } from "@mcbeer/types";
import mongoose, { Document, Schema } from "mongoose";

export interface IHopIngredient {
  amount: number;
  alpha: number;
  time: number;
  ingredient: HopIngredient;
  usage: EnumRecipeHopIngredientsUsage;
}
export const RecipeHopIngredientSchema = new Schema<IHopIngredient & any>(
  {
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HopIngredient",
    },
    ingredientId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    alpha: Number,
    time: Number,
    usage: {
      type: String,
      enum: ["Mash", "FirstWort", "Boil", "Whirlpool", "DryHop", "Secondary"],
    },
  },
  { id: false }
);
