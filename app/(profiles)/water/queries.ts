"use server";
import { WaterProfileFindManyArgs } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";
import { WaterProfileType } from "@/types/Profile";
import { cacheTag } from "next/cache";
import { cache } from "react";
export const getWaterProfiles = async (args: WaterProfileFindManyArgs = {}) => {
  "use cache";
  cacheTag("waterProfiles");
  const profiles = await prisma.waterProfile.findMany(args);
  return profiles as WaterProfileType[];
};

export const getWaterProfile = async (slug: string) => {
  const profile = await prisma.waterProfile.findFirst({
    where: { slug },
    include: {
      owner: { select: { name: true, id: true } },
      origin: { select: { name: true, id: true } },
      forks: { select: { name: true, id: true } },
    },
  });
  return profile as WaterProfileType;
};
