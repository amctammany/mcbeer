import { auth } from "@/auth";
import { redirect, unauthorized } from "next/navigation";
import React from "react";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import Inventory from "./_components/Inventory/Inventory";
import { authorizeResource } from "@/lib/authorizeResource";
import { getInventory } from "./queries";
import { verifySession } from "@/lib/verifySession";
import { getHopNames } from "@/app/(ingredients)/hops/queries";
import { getFermentableNames } from "@/app/(ingredients)/fermentables/queries";
import { getYeastNames } from "@/app/(ingredients)/yeasts/queries";

export default async function InventoryPage() {
  const session = await verifySession();
  if (!session) {
    return unauthorized();
  }
  const inventory = await getInventory(session.user.id);
  if (!inventory) {
    await prisma.inventory.create({
      data: {
        userId: session.user.id,
      },
    });
    return redirect("/inventory");
  }
  const hopNames = await prisma.hop.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
  const h = hopNames.map(({ name, slug }) => ({ label: name, value: slug }));
  return (
    <Inventory
      src={inventory}
      getFermentableNames={getFermentableNames()}
      getHopNames={getHopNames()}
      getYeastNames={getYeastNames()}
      hops={h}
    />
  );
}
