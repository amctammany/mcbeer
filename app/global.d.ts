import {
  AdjustedFermentableIngredientType,
  BaseHopIngredientType,
  BaseRecipeType,
} from "@/types/Recipe";
import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    recipe: Partial<AdjustedRecipeType> | null;
    hopIngredients: AdjustedHopIngredientType[];
    fermentableIngredients: AdjustedFermentableIngredientType[];
    idCounter: number;
    revisionCtx: typeof RevisionContext | null;
  }
}
