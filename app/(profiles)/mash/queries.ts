"use server";
import { prisma } from "@/lib/prisma";
import { AdjustedMashProfileType, MashProfileType } from "@/types/Profile";
import { cache } from "react";
export const getMashProfiles = async (args: any = {}) => {
  "use cache";
  const profiles = await prisma.mashProfile.findMany(args);
  return profiles;
};

export const getMashProfile = async (slug: string) => {
  "use cache";
  const profile = await prisma.mashProfile.findFirst({
    where: { slug },
    include: {
      steps: true,
      owner: { select: { name: true, id: true } },
      origin: { select: { name: true, id: true } },
      forks: { select: { name: true, id: true } },
    },
  });
  return profile as MashProfileType;
};
