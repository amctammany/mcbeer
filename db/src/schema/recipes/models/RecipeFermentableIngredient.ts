import { FermentableIngredient } from "@mcbeer/types";
import { composeMongoose } from "graphql-compose-mongoose";

//import { RecipeFermentableIngredient as RecipeFermentableIngredientType } from "@mcbeer/types";
type RecipeFermentableIngredientType = { ingredient: FermentableIngredient };

import mongoose, { Document, Schema } from "mongoose";

enum EnumFermentableIngredientUsage {
  Mash = "mash",
  Steep = "steep",
}
export interface IFermentableIngredient {
  ingredient: FermentableIngredient;
  amount: number;
  usage: EnumFermentableIngredientUsage;
}
export const RecipeFermentableIngredientSchema = new Schema<
  RecipeFermentableIngredientType & any
>(
  {
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FermentableIngredient",
    },

    amount: Number,
    usage: {
      type: String,
      enum: ["Mash", "Steep"],
    },
    ingredientId: mongoose.Schema.Types.ObjectId,
  },
  { id: false }
);
