"use server";
import { prisma } from "@/lib/prisma";
import { BreweryType, BreweryUserType } from "@/types/Brewery";
import { cacheTag } from "next/cache";

export async function fetchUserBreweries(userId: string) {
  "use cache";
  cacheTag("user-breweries");
  const users = await prisma.breweryUser.findMany({
    where: { userId },
    include: {
      brewery: {
        select: {
          id: true,
          name: true,
          description: true,
          address: true,
          city: true,
          state: true,
          country: true,
        },
      },
    },
  });
  return users.map((user) => user.brewery as BreweryType);
}
export async function fetchBrewery(breweryId: string) {
  const brewery = await prisma.brewery.findUnique({
    where: { id: breweryId },
    select: {
      id: true,
      name: true,
      description: true,
      address: true,
      city: true,
      state: true,
      country: true,
      vessels: {
        select: {
          id: true,
          name: true,
          volume: true,
          type: true,
          breweryId: true,
        },
      },
    },
  });
  return brewery as BreweryType;
}
export async function fetchBreweryUser(breweryId: string, userId: string) {
  const breweryUser = await prisma.breweryUser.findUnique({
    where: { breweryUserId: { userId, breweryId } },
    include: {
      brewery: {
        select: {
          id: true,
          name: true,
          description: true,
          address: true,
          city: true,
          state: true,
          country: true,
          vessels: {
            select: {
              id: true,
              name: true,
              volume: true,
              type: true,
              breweryId: true,
            },
          },
        },
      },
    },
  });
  return breweryUser as BreweryUserType;
}
