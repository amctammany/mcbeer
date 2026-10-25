import React from "react";
import { getRecipes } from "./queries";
import RecipeExplorer from "./_components/RecipeExplorer/RecipeExplorer";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { RecipeFolderType } from "@/types/Recipe";

export default async function RecipesPage() {
  // const { path: _p } = await params;
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const breweryId = session?.user?.defaultBreweryId;
  console.log(breweryId);
  const folder = (await prisma.recipeFolder.findFirst({
    where: {
      name: "root" as const,
      breweryId,
    },
    include: {
      recipeFolders: true, //{ select: { id: true, name: true } },
      recipes: true, //{ select: { id: true, name: true } },
    },
  })) as RecipeFolderType;
  const recipes = await getRecipes();
  console.log(recipes);
  return <RecipeExplorer folder={folder} recipes={recipes} />;
}
