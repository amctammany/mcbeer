import { prisma } from "@/lib/prisma";
import { HopType } from "@/types/Ingredient";
import { cacheTag } from "next/cache";

export const getHops = async (args: any = {}) => {
  "use cache";
  cacheTag("hops");
  const hops = await prisma.hop.findMany(args);
  return hops as HopType[];
};

export const getHop = async (slug: string) => {
  const hop = await prisma.hop.findFirst({ where: { slug } });
  return {
    alphaRange: [hop?.alphaLow, hop?.alphaHigh].map((n) => (n ?? 0) * 1),
    betaRange: [hop?.betaLow, hop?.betaHigh].map((n) => (n ?? 0) * 1),
    cohumuloneRange: [hop?.cohumuloneLow, hop?.cohumuloneHigh].map(
      (n) => (n ?? 0) * 1
    ),
    totalOilRange: [hop?.totalOilLow, hop?.totalOilHigh].map(
      (n) => (n ?? 0) * 1
    ),
    farneseneRange: [hop?.farneseneLow, hop?.farneseneHigh].map(
      (n) => (n ?? 0) * 1
    ),
    bPineneRange: [hop?.bPineneLow, hop?.bPineneHigh].map((n) => (n ?? 0) * 1),
    linaloolRange: [hop?.linaloolLow, hop?.linaloolHigh].map(
      (n) => (n ?? 0) * 1
    ),
    geraniolRange: [hop?.geraniolLow, hop?.geraniolHigh].map(
      (n) => (n ?? 0) * 1
    ),
    caryophylleneRange: [hop?.caryophylleneLow, hop?.caryophylleneHigh].map(
      (n) => (n ?? 0) * 1
    ),
    myrceneRange: [hop?.myrceneLow, hop?.myrceneHigh].map((n) => (n ?? 0) * 1),
    humuleneRange: [hop?.humuleneLow, hop?.humuleneHigh].map(
      (n) => (n ?? 0) * 1
    ),
    ...hop,
  } as HopType;
};
