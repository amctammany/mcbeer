"use server";

import { reduceUnits } from "@/lib/Converter/adjustUnits";
import { prisma } from "@/lib/prisma";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { recipeSchema } from "@/schemas/RecipeSchemas";
import { BaseRecipe, RecipeType } from "@/types/Recipe";
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
  const res = await prisma.recipe.create({
    data: v.data,
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
  const { id, ...data } = v.data;
  const res = await prisma.recipe.update({
    where: { id },
    data,
  });
  updateTag("recipes");
  return redirect(`/recipes/${res.id}`);
}
