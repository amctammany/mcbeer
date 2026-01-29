"use server";
import { prisma } from "@/lib/prisma";
import { InventoryType } from "@/types/Inventory";

export async function getInventory(userId: string) {
  const res = await prisma.inventory.findUnique({
    where: { userId },
    include: {
      fermentableInventoryItems: {
        include: {
          fermentable: {
            select: {
              slug: true,
              name: true,
              potential: true,
              color: true,
            },
          },
        },
      },
      yeastInventoryItems: {
        include: {
          yeast: {
            select: {
              slug: true,
              name: true,
              attenuation: true,
              tolerance: true,
            },
          },
        },
      },
      hopInventoryItems: {
        include: {
          hop: {
            select: {
              slug: true,
              name: true,
              alpha: true,
            },
          },
        },
      },
    },
  });
  return res as InventoryType;
}
