import mongoose, { Document, Schema } from "mongoose";

type RecipeHopIngredientType = any;
export const RecipeHopIngredientSchema = new Schema<
  RecipeHopIngredientType & any
>(
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
