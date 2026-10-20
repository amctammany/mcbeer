import { ExtendedRecipeType, RecipeType } from "@/types/Recipe";
import { precisionRound } from "../utils";
import { convertUnit, convertUnitRaw } from "../Converter/adjustUnits";

export function calculateSRM(recipe: ExtendedRecipeType): number {
  const batchVolume = convertUnitRaw(recipe.batchVolume ?? 1, "L", "gal");
  const mcu =
    (recipe.fermentableIngredients ?? []).reduce((acc, ing) => {
      const c = (ing.color ?? 1) * ing.amount!;
      console.log({ ing, batchVolume, c });
      return acc + c;
    }, 0) / batchVolume;
  const srm = 1.4922 * Math.pow(mcu, 0.6859);
  return precisionRound(srm, 3);
}

export function calculateGravity(recipe: ExtendedRecipeType): number {
  const batchVolume = convertUnitRaw(recipe.batchVolume ?? 1, "L", "gal");
  const gravPoints = (recipe.fermentableIngredients ?? []).reduce(
    (acc, ing) => {
      const potential = ((ing.potential ?? 1) - 1) * 1000;
      const gp = ((ing.amount ?? 1)! * potential) / batchVolume;
      // console.log(ing.fermentable.potential, ing.amount, gp);
      return acc + gp;
    },
    0,
  );
  const gravity = gravPoints * (recipe.brewEfficiency ?? 0.72);
  const res = 1 + gravity / 1000;
  // console.log(res, gravPoints, gravity, recipe.brewEfficiency, batchVolume);
  return precisionRound(res, 3);
}
export function calculateVitals(recipe: ExtendedRecipeType): any {
  const OG = calculateGravity(recipe);
  const SRM = calculateSRM(recipe);
  //   return parseFloat(gravity.toFixed(2));
  return {
    OG,
    SRM,
  };
}
