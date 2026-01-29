import { auth } from "@/auth";
import { redirect, unauthorized } from "next/navigation";
import React from "react";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import Inventory from "./_components/Inventory/Inventory";
import { authorizeResource } from "@/lib/authorizeResource";
import { getInventory } from "./queries";
import { verifySession } from "@/lib/verifySession";

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
  console.log(inventory);
  return <Inventory src={inventory} />;
}
