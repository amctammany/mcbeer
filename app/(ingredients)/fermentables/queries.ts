import { prisma } from "@/lib/prisma";
import { FermentableType } from "@/types/Ingredient";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export const getFermentables = async (args: any = {}) => {
  "use cache";
  cacheTag("fermentables");
  const fermentables = await prisma.fermentable.findMany(args);
  return fermentables as FermentableType[];
};

export const getFermentable = async (slug: string) => {
  "use cache";
  const fermentable = await prisma.fermentable.findFirst({ where: { slug } });
  if (!fermentable) notFound();
  cacheTag(`fermentables-${fermentable.id}`);
  return fermentable as FermentableType;
};
