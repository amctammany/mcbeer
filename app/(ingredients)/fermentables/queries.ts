import { prisma } from "@/lib/prisma";
import { FermentableType } from "@/types/Ingredient";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export const getFermentableNames = async () => {
  "use cache";
  cacheTag("fermentables");
  const fermentables = await prisma.fermentable.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
  const names = fermentables.map(({ name, slug }) => ({
    label: name,
    value: slug,
  }));
  return names;
};

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
