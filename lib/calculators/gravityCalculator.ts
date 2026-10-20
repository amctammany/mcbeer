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

export function calculateOG(recipe: ExtendedRecipeType): number {
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
export function calculateFG(recipe: ExtendedRecipeType, og: number): number {
  const attenuation =
    (recipe.yeastIngredients ?? []).reduce((acc, yeast) => {
      return acc + (yeast.attenuation ?? 1);
    }, 0) / (recipe.yeastIngredients?.length ?? 1);
  const fg =
    1 + (og - 1) * (1 - (recipe.yeastIngredients?.length ? attenuation : 0.78));
  console.log(attenuation, fg);
  return precisionRound(fg, 3);
}
export function calculateABV(og: number, fg: number): number {
  const abv = (og - fg) * 131.25;
  return precisionRound(abv, 2);
}
export function calculateIBUs(
  recipe: ExtendedRecipeType,
  _og?: number,
): number {
  const og = _og ?? calculateOG(recipe);
  console.log(recipe.hopIngredients);
  const ibus = (recipe.hopIngredients ?? []).reduce((acc, hop) => {
    const utilization =
      (1.65 *
        Math.pow(0.000125, og - 1) *
        (1 - Math.exp(-0.04 * hop.duration))) /
      4.15;
    const ibu = (hop.alpha ?? 0) * hop.amount * utilization * 74.62;
    return acc + ibu;
  }, 0);
  return precisionRound(ibus, 2);
}
export function calculateVitals(recipe: ExtendedRecipeType): any {
  const OG = calculateOG(recipe);
  const FG = calculateFG(recipe, OG);
  const SRM = calculateSRM(recipe);
  const ABV = calculateABV(OG, FG);
  const IBUs = calculateIBUs(recipe, OG);
  //   return parseFloat(gravity.toFixed(2));
  return {
    OG,
    FG,
    SRM,
    ABV,
    IBUs,
  };
}
