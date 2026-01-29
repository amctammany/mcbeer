import { verifySession } from "@/lib/verifySession";
import { unauthorized } from "next/navigation";
import React from "react";
import { getInventory } from "../queries";
import { updateInventory } from "../actions";
import InventoryUpdate from "../_components/Inventory/InventoryUpdate/InventoryUpdate";

export default async function InventoryUpdatePage() {
  const session = await verifySession();
  if (!session) {
    return unauthorized();
  }
  const inventory = await getInventory(session.user.id);
  return <InventoryUpdate src={inventory} action={updateInventory} />;
}
