//import { RecipeOtherIngredient as RecipeOtherIngredientType } from "@lnk/types";
type RecipeOtherIngredientType = any;
import mongoose, { Document, Schema } from "mongoose";

export const RecipeOtherIngredientSchema = new Schema<
  RecipeOtherIngredientType & any
>(
  {
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OtherIngredient",
    },
    ingredientId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    time: Number,
    usage: {
      type: String,
      enum: [
        "Mash",
        "Sparge",
        "Boil",
        "Whirlpool",
        "Primary",
        "Secondary",
        "Bottling",
      ],
    },
  },
  { id: false }
);
