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
  return hop as HopType;
};
