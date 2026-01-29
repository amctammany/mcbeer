import { InventoryListItemType, InventoryItemType } from "@/types/Inventory";
import React from "react";
import InventoryListItem, { InventoryListItemProps } from "./InventoryListItem";
import { Beaker, Hop, Wheat } from "lucide-react";
// import { FermentableInventoryItem, HopInventoryItem } from "@/generated/prisma/client";
export type InventoryListProps = {
  type?: InventoryItemType | "default";
  items?: InventoryListItemType[];
};

const HopInventoryListItem = ({ name, amount }: InventoryListItemProps) => (
  <InventoryListItem Icon={Hop} name={name} amount={amount} />
);
const YeastInventoryListItem = ({ name, amount }: InventoryListItemProps) => (
  <InventoryListItem Icon={Beaker} name={name} amount={amount} />
);
const FermentableInventoryListItem = ({
  name,
  amount,
}: InventoryListItemProps) => (
  <InventoryListItem Icon={Wheat} name={name} amount={amount} />
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
  type = "default",
  items = [],
}: InventoryListProps) {
  const Comp = comps[type];
  return (
    <div>
      {items.map((item) => (
        <Comp key={item.id} name={item.name} amount={item.amount} />
      ))}
    </div>
  );
}
