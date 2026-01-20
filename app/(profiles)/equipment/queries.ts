"use server";
import { prisma } from "@/lib/prisma";
import { EquipmentProfileType } from "@/types/Profile";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";
export const getEquipmentProfiles = async (args: any = {}) => {
  "use cache";
  cacheTag("equipment");
  const profiles = await prisma.equipmentProfile.findMany(args);
  return profiles;
};

export const getEquipmentProfile = async (slug: string) => {
  "use cache";
  const profile = await prisma.equipmentProfile.findFirst({
    where: { slug },
    include: {
      owner: { select: { name: true, id: true } },
      origin: { select: { name: true, id: true } },
      forks: { select: { name: true, id: true } },
    },
  });
  if (!profile) notFound();
  cacheTag(`equipment-${profile.id}`);
  return profile as EquipmentProfileType;
};
