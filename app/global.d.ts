import { BaseHopIngredientType, BaseRecipeType } from "@/types/Recipe";
import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    recipe: Partial<BaseRecipeType> | null;
    hopIngredients: BaseHopIngredientType[];
    idCounter: number;
  }
}
