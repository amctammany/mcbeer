import { RevisionContextType } from "@/contexts/RevisionContext";
import { deepSet } from "@/lib/utils";
import {
  AdjustedFermentableIngredientType,
  AdjustedHopIngredientType,
  AdjustedRecipeType,
  //   BaseHopIngredientType,
  //   BaseRecipeType,
  RecipeType,
} from "@/types/Recipe";
import { GlobalState } from "little-state-machine";

export function setRecipe(state: GlobalState, data: AdjustedRecipeType) {
  const {
    owner,
    style,
    hopIngredients,
    fermentableIngredients,
    origin,
    forks,
    ...recipe
  } = data;
  return { ...state, recipe, hopIngredients, fermentableIngredients };
}
export function updateRecipe(
  state: any,
  payload: { name: string; value: any },
) {
  return {
    ...state,
    recipe: deepSet(state.recipe, payload.name, payload.value),
  };
}

export function addFermentableIngredient(
  state: any,
  data: AdjustedFermentableIngredientType,
) {
  const fermentableIngredients = [
    ...(state.fermentableIngredients ?? []),
    data,
  ];
  return { ...state, fermentableIngredients };
}
export function updateFermentableIngredient(
  state: GlobalState,
  data: AdjustedFermentableIngredientType,
) {
  const fermentableIngredients = state.fermentableIngredients.map(
    (h: AdjustedFermentableIngredientType) => (h.id === data.id ? data : h),
  );
  return { ...state, fermentableIngredients };
}

export function removeFermentableIngredient(
  state: any,
  data: AdjustedFermentableIngredientType,
) {
  const fermentableIngredients = (
    (state.fermentableIngredients ?? []) as AdjustedFermentableIngredientType[]
  ).filter(({ id }) => id !== data.id);
  return { ...state, fermentableIngredients };
}

export function addHopIngredient(state: any, data: AdjustedHopIngredientType) {
  const hopIngredients = [...(state.hopIngredients ?? []), data];
  return { ...state, hopIngredients };
}
export function updateHopIngredient(
  state: any,
  data: AdjustedHopIngredientType,
) {
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
export function registerRevisionCtx(
  state: GlobalState,
  revisionCtx: RevisionContextType<GlobalState>,
) {
  return { ...state, revisionCtx };
}
export function updateRevision(state: GlobalState, data: any) {
  console.log(state, data);
  return state;
}
