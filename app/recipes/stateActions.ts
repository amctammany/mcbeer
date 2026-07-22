import { deepSet } from "@/lib/utils";
import {
  AdjustedHopIngredientType,
  //   BaseHopIngredientType,
  //   BaseRecipeType,
  RecipeType,
} from "@/types/Recipe";
import { GlobalState } from "little-state-machine";

export function setRecipe(state: GlobalState, data: RecipeType) {
  console.log("setRecipe", { state, data });
  const { owner, style, hopIngredients, origin, forks, ...recipe } = data;
  return { ...state, recipe, hopIngredients };
}
export function updateRecipe(
  state: any,
  payload: { name: string; value: any },
) {
  console.log(state, payload);
  return {
    ...state,
    recipe: deepSet(state.recipe, payload.name, payload.value),
  };
}

export function addHopIngredient(state: any, data: AdjustedHopIngredientType) {
  console.log(state);
  const hopIngredients = [...(state.hopIngredients ?? []), data];
  return { ...state, hopIngredients };
}
export function updateHopIngredient(
  state: any,
  data: AdjustedHopIngredientType,
) {
  console.log(state);
  const hopIngredients = state.hopIngredients.map(
    (h: AdjustedHopIngredientType) => (h.id === data.id ? data : h),
  );
  return { ...state, hopIngredients };
}

export function removeHopIngredient(
  state: any,
  data: AdjustedHopIngredientType,
) {
  const hopIngredients = (
    (state.hopIngredients ?? []) as AdjustedHopIngredientType[]
  ).filter(({ id }) => id !== data.id);
  return { ...state, hopIngredients };
}
