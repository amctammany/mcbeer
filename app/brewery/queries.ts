import { prisma } from "@/lib/prisma";

export async function fetchUserBreweries(userId: string) {
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
  return users.map((user) => user.brewery);
}
export async function fetchBreweryUser(breweryId: string, userId: string) {
  return prisma.breweryUser.findUnique({
    where: { id: { userId, breweryId } },
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
}
