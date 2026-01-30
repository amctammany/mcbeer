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
      owner: true,
    },
  });
  return recipe as RecipeType;
};
