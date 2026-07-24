"use server";

import { reduceUnits } from "@/lib/Converter/adjustUnits";
import { prisma } from "@/lib/prisma";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import {
  fermentableIngredientSchema,
  hopIngredientSchema,
  recipeSchema,
} from "@/schemas/RecipeSchemas";
import {
  BaseFermentableIngredientType,
  BaseHopIngredientType,
  BaseRecipeType,
  RecipeType,
} from "@/types/Recipe";
import { refresh, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { success } from "zod";

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
  const {
    id,
    hopIngredients,
    fermentableIngredients,
    owner,
    origin,
    forks,
    style,
    ...data
  } = r;

  const res = await prisma.recipe.create({
    data: {
      fermentableIngredients: {
        create: fermentableIngredients,
      },
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
  const {
    id,
    hopIngredients,
    fermentableIngredients,
    owner,
    origin,
    forks,
    style,
    ...data
  } = r;
  console.log("updateRecipe", { data, hopIngredients, fermentableIngredients });
  /**
  const ftx = await prisma.$transaction([
    ...fermentableIngredients.map(({ id: _id, ...d }) => {
      return _id
        ? prisma.fermentableIngredient.update({
            where: {
              id: _id,
            },
            data: d,
          })
        : prisma.fermentableIngredient.create({
            data: { recipeId: id!, ...d },
          });
    }),
  ]);

  const htx = await prisma.$transaction([
    ...hopIngredients.map(({ id: _id, ...d }) => {
      return _id
        ? prisma.hopIngredient.update({
            where: {
              id: _id,
            },
            data: d,
          })
        : prisma.hopIngredient.create({ data: { recipeId: id!, ...d } });
    }),
  ]);
 */
  // const hopIngs = await prisma.hopIngredient.upsert({
  // create: hopIngredients
  // .filter(({ id }) => id === undefined)
  // .map((h) => ({ recipeId: id!, ...h })),
  // });
  const res = await prisma.recipe.update({
    where: { id },
    data: {
      fermentableIngredients: {
        connect: fermentableIngredients.map(({ id: _id }) => ({
          id: _id,
        })),
      },
      hopIngredients: {
        connect: hopIngredients.map(({ id: _id }) => ({
          id: _id,
        })),
      },
      ...data,
    },
  });
  updateTag("recipes");
  return redirect(`/recipes/${res.id}`);
}

export async function createFermentableIngredient(
  prev: any,
  formData: FormData,
) {
  const v = validateSchema(formData, fermentableIngredientSchema);
  console.log("addFermIng", v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  /** 
  const { id, userId, mashProfileId, equipmentProfileId,styleId, ...r } = (
    v.data,
  ) as BaseRecipe;
   */
  const r = reduceUnits(v.data) as BaseFermentableIngredientType;
  const { id, ...data } = r;
  console.log({ prev, r });
  const res = await prisma.fermentableIngredient.create({
    data,
    include: { recipe: true },
  });
  refresh();
  return { data: res, success: true, errors: [] };
}

export async function updateFermentableIngredient(
  prev: any,
  formData: FormData,
) {
  const v = validateSchema(formData, fermentableIngredientSchema);
  console.log("updateFermIng", v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  /** 
  const { id, userId, mashProfileId, equipmentProfileId,styleId, ...r } = (
    v.data,
  ) as BaseRecipe;
   */
  const r = reduceUnits(v.data) as BaseFermentableIngredientType;
  const { id, ...data } = r;
  console.log({ prev, r });
  const res = await prisma.fermentableIngredient.update({
    where: { id },
    data,
    include: { recipe: true },
  });
  refresh();
  return { data: res, success: true, errors: [] };
}

export async function createHopIngredient(prev: any, formData: FormData) {
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
  const res = await prisma.hopIngredient.create({
    data,
    include: { recipe: true },
  });
  refresh();
  return { data: res, success: true, errors: [] };
}

export async function updateHopIngredient(prev: any, formData: FormData) {
  const v = validateSchema(formData, hopIngredientSchema);
  console.log("updateHopIng", v);
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
  const res = await prisma.hopIngredient.update({
    where: { id },
    data,
    include: { recipe: true },
  });
  refresh();
  return { data: res, success: true, errors: [] };
}
