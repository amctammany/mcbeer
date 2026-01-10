import { prisma } from "@/lib/prisma";
import { YeastType } from "@/types/Ingredient";
import { cacheTag } from "next/cache";

export const getYeasts = async (args: any = {}) => {
  "use cache";
  cacheTag("yeasts");
  const yeasts = await prisma.yeast.findMany(args);
  return yeasts as YeastType[];
};

export const getYeast = async (slug: string) => {
  const yeast = await prisma.yeast.findFirst({ where: { slug } });
  return {
    tempRange: [yeast?.tempLow ?? 0, yeast?.tempHigh ?? 212].map(
      (n) => (n ?? 0) * 1
    ),
    ...yeast,
  } as YeastType;
};
