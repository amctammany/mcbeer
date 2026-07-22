import { BaseHopIngredientType, BaseRecipeType } from "@/types/Recipe";
import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    recipe: Partial<AdjustedRecipeType> | null;
    hopIngredients: AdjustedHopIngredientType[];
    idCounter: number;
  }
}
