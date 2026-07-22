"use server";

import { reduceUnits } from "@/lib/Converter/adjustUnits";
import { prisma } from "@/lib/prisma";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { hopIngredientSchema, recipeSchema } from "@/schemas/RecipeSchemas";
import {
  BaseHopIngredientType,
  BaseRecipeType,
  RecipeType,
} from "@/types/Recipe";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createRecipe(prev: any, formData: FormData) {
  const v = validateSchema(formData, recipeSchema);
  console.log(v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  /** 
  const { id, userId, mashProfileId, equipmentProfileId,styleId, ...r } = (
    v.data,
  ) as BaseRecipe;
   */
  const r = reduceUnits(v.data) as RecipeType;
  const { id, hopIngredients, owner, origin, forks, style, ...data } = r;

  const res = await prisma.recipe.create({
    data: {
      hopIngredients: {
        create: hopIngredients,
      },
      ...data,
    },
  });
  updateTag("recipes");
  return redirect(`/recipes/${res.id}`);
}

export async function updateRecipe(prev: any, formData: FormData) {
  const v = validateSchema(formData, recipeSchema);
  console.log(v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  /** 
  const { id, userId, mashProfileId, equipmentProfileId,styleId, ...r } = (
    v.data,
  ) as BaseRecipe;
   */
  const r = reduceUnits(v.data) as RecipeType;
  const { id, hopIngredients, owner, origin, forks, style, ...data } = r;
  const tx = await prisma.$transaction([
    ...hopIngredients.map(({ id: _id, ...d }) => {
      return _id
        ? prisma.hopIngredient.update({
            where: {
              recipeId_id: {
                recipeId: id!,
                id: _id,
              },
            },
            data: d,
          })
        : prisma.hopIngredient.create({ data: { recipeId: id!, ...d } });
    }),
  ]);
  // const hopIngs = await prisma.hopIngredient.upsert({
  // create: hopIngredients
  // .filter(({ id }) => id === undefined)
  // .map((h) => ({ recipeId: id!, ...h })),
  // });
  const res = await prisma.recipe.update({
    where: { id },
    data: {
      hopIngredients: {
        connect: tx.map(({ recipeId, id: _id }) => ({
          recipeId_id: {
            recipeId,
            id: _id,
          },
        })),
      },
      ...data,
    },
  });
  updateTag("recipes");
  return redirect(`/recipes/${res.id}`);
}

export async function addHopIngredientToRecipe(prev: any, formData: FormData) {
  const v = validateSchema(formData, hopIngredientSchema);
  console.log("addHopIng", v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  /** 
  const { id, userId, mashProfileId, equipmentProfileId,styleId, ...r } = (
    v.data,
  ) as BaseRecipe;
   */
  const r = reduceUnits(v.data) as BaseHopIngredientType;
  const { id, ...data } = r;
  console.log({ prev, r });
  return;
}
