import mongoose from "mongoose";
import { RecipeFermentableIngredientSchema } from "./RecipeFermentableIngredient";
import { RecipeHopIngredientSchema } from "./RecipeHopIngredient";
import { RecipeOtherIngredientSchema } from "./RecipeOtherIngredient";
import { RecipeYeastIngredientSchema } from "./RecipeYeastIngredient";

export const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  authorEmail: String,
  hopIngredients: [RecipeHopIngredientSchema],
  fermentableIngredients: [RecipeFermentableIngredientSchema],
  yeastIngredients: [RecipeYeastIngredientSchema],
  otherIngredients: [RecipeOtherIngredientSchema],
});
