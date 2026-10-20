import { ExtendedRecipeType, RecipeType } from "@/types/Recipe";
import { precisionRound } from "../utils";

export function calculateGravity(recipe: ExtendedRecipeType): number {
  const gravPoints = recipe.fermentableIngredients.reduce((acc, ing) => {
    const potential = ((ing.fermentable.potential ?? 1) - 1) * 1000;
    const gp = (ing.amount ?? 1)! * potential;
    return acc + gp;
  }, 0);
  const gravity =
    (gravPoints * (recipe.brewEfficiency ?? 0.72)) / recipe.batchVolume!;
  const res = 1 + gravity / 1000;
  console.log(res);
  return precisionRound(res, 3);
}
export function calculateVitals(recipe: ExtendedRecipeType): any {
  const og = calculateGravity(recipe);
  //   return parseFloat(gravity.toFixed(2));
  return {
    og,
  };
}
