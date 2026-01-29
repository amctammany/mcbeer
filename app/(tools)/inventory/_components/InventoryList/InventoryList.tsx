import { InventoryListItemType, InventoryItemType } from "@/types/Inventory";
import React from "react";
import InventoryListItem, { InventoryListItemProps } from "./InventoryListItem";
import { Beaker, Hop, Wheat } from "lucide-react";
// import { FermentableInventoryItem, HopInventoryItem } from "@/generated/prisma/client";
export type InventoryListProps = {
  type?: InventoryItemType; //| "default";
  items?: InventoryListItemType[];
};

const HopInventoryListItem = ({ name, amount }: InventoryListItemProps) => (
  <InventoryListItem Icon={Hop} name={name} type="Hop" amount={amount} />
);
const YeastInventoryListItem = ({ name, amount }: InventoryListItemProps) => (
  <InventoryListItem Icon={Beaker} type="Yeast" name={name} amount={amount} />
);
const FermentableInventoryListItem = ({
  name,
  amount,
}: InventoryListItemProps) => (
  <InventoryListItem
    type="Fermentable"
    Icon={Wheat}
    name={name}
    amount={amount}
  />
);

const comps: Record<
  InventoryItemType | "default",
  React.FC<InventoryListItemProps>
> = {
  Hop: HopInventoryListItem,
  Yeast: YeastInventoryListItem,
  Fermentable: FermentableInventoryListItem,
  default: InventoryListItem,
};
export default function InventoryList({
  type,
  items = [],
}: InventoryListProps) {
  const Comp = comps[type ?? "default"];
  return (
    <div>
      {items.map((item) => (
        <Comp key={item.id} type={type} name={item.name} amount={item.amount} />
      ))}
    </div>
  );
}
