"use server";
import { FermentationProfileFindManyArgs } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import { cacheTag } from "next/cache";
import { cache } from "react";
export const getFermentationProfiles = async (
  args: FermentationProfileFindManyArgs = {},
) => {
  "use cache";
  cacheTag("fermentationProfiles");
  const profiles = await prisma.fermentationProfile.findMany(args);
  return profiles as FermentationProfileType[];
};

export const getFermentationProfile = async (slug: string) => {
  // "use cache";
  const profile = await prisma.fermentationProfile.findFirst({
    where: { slug },
    include: {
      steps: true,
      owner: { select: { name: true, id: true } },
      origin: { select: { name: true, id: true, slug: true } },
      forks: { select: { name: true, id: true, slug: true } },
    },
  });
  return profile as FermentationProfileType;
};
