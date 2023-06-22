type RecipeYeastIngredientType = any;

import mongoose, { Document, Schema } from "mongoose";

export const RecipeYeastIngredientSchema = new Schema<
  RecipeYeastIngredientType & any
>(
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
