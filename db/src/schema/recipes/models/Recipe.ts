import mongoose from "mongoose";
import {
  RecipeFermentableIngredientSchema,
  type IFermentableIngredient,
} from "./RecipeFermentableIngredient";
import {
  RecipeHopIngredientSchema,
  IHopIngredient,
} from "./RecipeHopIngredient";
import {
  RecipeOtherIngredientSchema,
  type IOtherIngredient,
} from "./RecipeOtherIngredient";
import {
  RecipeYeastIngredientSchema,
  type IYeastIngredient,
} from "./RecipeYeastIngredient";

export interface IRecipe {
  name: string;
  authorEmail: string;
  hopIngredients: [IHopIngredient];
  fermentableIngredients: [IFermentableIngredient];
  yeastIngredients: [IYeastIngredient];
  otherIngredients: [IOtherIngredient];
}
export const RecipeSchema = new mongoose.Schema<IRecipe>({
  name: { type: String, required: true },
  authorEmail: String,
  hopIngredients: [RecipeHopIngredientSchema],
  fermentableIngredients: [RecipeFermentableIngredientSchema],
  yeastIngredients: [RecipeYeastIngredientSchema],
  otherIngredients: [RecipeOtherIngredientSchema],
});
