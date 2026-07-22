"use server";
import { prisma } from "@/lib/prisma";
import { RecipeType } from "@/types/Recipe";
import { cacheTag } from "next/cache";
import { cache } from "react";
export const getRecipes = async (args: any = {}) => {
  "use cache";
  cacheTag("recipes");
  const recipes = (await prisma.recipe.findMany(args)) as RecipeType[];
  return recipes;
};

export const getRecipe = async (id: string) => {
  const recipe = await prisma.recipe.findFirst({
    where: { id },
    include: {
      fermentableIngredients: {
        select: {
          id: true,
          recipeId: true,
          fermentable: { select: { name: true, color: true, potential: true } },
          fermentableId: true,
          color: true,
          amount: true,
          amountType: true,
          usage: true,
          potential: true,
        },
      },
      hopIngredients: {
        select: {
          id: true,
          recipeId: true,
          hop: { select: { name: true, alpha: true } },
          type: true,
          hopId: true,
          alpha: true,
          usage: true,
          amountType: true,
          amount: true,
          durationType: true,
          duration: true,
        },
      },
      EquipmentProfile: true,
      style: true,
      owner: true,
    },
  });
  return recipe as RecipeType;
};
