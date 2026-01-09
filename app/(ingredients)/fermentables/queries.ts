import { prisma } from "@/lib/prisma";
import { FermentableType } from "@/types/Ingredient";
import { cacheTag } from "next/cache";

export const getFermentables = async (args: any = {}) => {
  "use cache";
  cacheTag("fermentables");
  const fermentables = await prisma.fermentable.findMany(args);
  return fermentables as FermentableType[];
};

export const getFermentable = async (slug: string) => {
  const fermentable = await prisma.fermentable.findFirst({ where: { slug } });
  return fermentable as FermentableType;
};
