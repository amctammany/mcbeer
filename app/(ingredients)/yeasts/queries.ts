import { prisma } from "@/lib/prisma";
import { YeastType } from "@/types/Ingredient";
import { cacheTag } from "next/cache";

export const getYeastNames = async () => {
  "use cache";
  cacheTag("yeasts");
  const yeasts = await prisma.yeast.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
  const names = yeasts.map(({ name, slug }) => ({ label: name, value: slug }));
  return names;
};
export const getYeasts = async (args: any = {}) => {
  "use cache";
  cacheTag("yeasts");
  const yeasts = await prisma.yeast.findMany(args);
  return yeasts as YeastType[];
};

export const getYeast = async (slug: string) => {
  const yeast = await prisma.yeast.findFirst({ where: { slug } });
  return {
    attenuationRange: [
      yeast?.attenuationLow ?? 0,
      yeast?.attenuationHigh ?? 1,
    ].map((n) => (n ?? 0) * 1),
    tempRange: [yeast?.tempLow ?? 0, yeast?.tempHigh ?? 212].map(
      (n) => (n ?? 0) * 1,
    ),
    ...yeast,
  } as YeastType;
};
