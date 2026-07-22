"use client";
import { setRecipe } from "@/app/recipes/stateActions";
// import { addHopIngredientToRecipe } from "@/app/recipes/actions";
import { RecipeContext } from "@/contexts/RecipeContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { HopIngredientType, UserPreferences } from "@/generated/prisma/browser";
import { reduceUnits } from "@/lib/Converter/adjustUnits";
import {
  AdjustedHopIngredientType,
  AdjustedRecipeType,
  BaseHopIngredientType,
  BaseRecipeType,
  RecipeType,
} from "@/types/Recipe";
import { useStateMachine } from "little-state-machine";
import React, {
  ReactNode,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export default function RecipeProvider({
  recipe,
  children,
}: {
  recipe: RecipeType;
  children: ReactNode | ReactNode[];
}) {
  const [hopIngredients, setHopIngredients] = useState<BaseHopIngredientType[]>(
    [],
  );
  const [current, setCurrent] = useState<RecipeType>(recipe);
  const updateRecipe = useCallback(
    (data: BaseRecipeType) => {
      console.log({ current, data });
      setCurrent((old) => ({ ...old, ...data }));
    },
    [current],
  );
  function addHopIngredientToRecipe(data: any) {
    const r = reduceUnits<BaseHopIngredientType>(data);

    setHopIngredients((old) => [...old, r]);
    return;
  }
  function addFermentableIngredientToRecipe(data: AdjustedHopIngredientType) {
    return;
  }
  const { state, actions } = useStateMachine({ actions: { setRecipe } });
  useEffect(() => {
    actions.setRecipe(recipe);
  }, [recipe]);
  const ctx = useMemo(
    () => ({
      state,
      recipe,
      current,
      hopIngredients,
      updateRecipe,
      addHopIngredientToRecipe,
      addFermentableIngredientToRecipe,
    }),
    [recipe],
  );
  return <RecipeContext value={ctx}>{children}</RecipeContext>;
}
