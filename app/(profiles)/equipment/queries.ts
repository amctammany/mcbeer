import { prisma } from "@/lib/prisma";
import { EquipmentProfileType } from "@/types/Profile";
import { cache } from "react";
export const getEquipmentProfiles = async (args: any = {}) => {
  const profiles = await prisma.equipmentProfile.findMany(args);
  return profiles;
};

export const getEquipmentProfile = async (slug: string) => {
  const profile = await prisma.equipmentProfile.findFirst({
    where: { slug },
    include: {
      owner: { select: { name: true, id: true } },
      origin: { select: { name: true, id: true } },
      forks: { select: { name: true, id: true } },
    },
  });
  return profile as EquipmentProfileType;
};
