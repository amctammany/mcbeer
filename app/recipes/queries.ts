"use server";
import { prisma } from "@/lib/prisma";
import { RecipeFolderType, RecipeType } from "@/types/Recipe";
import { cacheTag } from "next/cache";
import { cache } from "react";
export const getRecipeFolderAtLocation = async ({
  path,
  breweryId,
  // path: string | string[] = [],breweryId
}: {
  path: string | string[];
  breweryId: string;
}) => {
  // "use cache";
  const pathname = Array.isArray(path) ? path.join("/") : path;
  // cacheTag("recipes");
  const folder = await prisma.recipeFolder.findFirst({
    where: {
      breweryId,
      pathname,
    },
    include: {
      // children: true,
      recipeFolders: true,
      recipes: {
        select: {
          id: true,
          name: true,
          styleIdentifier: true,
        },
      },
    },
  });
  return folder as RecipeFolderType;
};
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
      WaterProfile: true,
      MashProfile: { select: { id: true, name: true, steps: true } },
      FermentationProfile: { select: { id: true, name: true, steps: true } },
      fermentableIngredients: {
        select: {
          id: true,
          recipeId: true,
          fermentable: {
            select: { name: true, color: true, potential: true },
          },
          fermentableId: true,
          color: true,
          amount: true,
          amountType: true,
          usage: true,
          potential: true,
        },
      },
      yeastIngredients: {
        select: {
          id: true,
          recipeId: true,
          yeast: { select: { name: true, attenuation: true } },
          yeastId: true,
          attenuation: true,
          amount: true,
          amountType: true,
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
  return {
    ...recipe,
    mashSteps: recipe?.MashProfile?.steps ?? [],
    fermentationSteps: recipe?.FermentationProfile?.steps ?? [],
  } as RecipeType;
};
