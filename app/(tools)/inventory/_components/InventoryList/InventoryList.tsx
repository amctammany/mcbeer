import { InventoryListItemType, InventoryItemType } from "@/types/Inventory";
import React from "react";
import InventoryListItem, { InventoryListItemProps } from "./InventoryListItem";
import { Beaker, Hop, Wheat } from "lucide-react";
// import { FermentableInventoryItem, HopInventoryItem } from "@/generated/prisma/client";
export type InventoryListProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: InventoryItemType; //| "default";
  items?: InventoryListItemType[];
};

const Icons: Record<InventoryItemType, typeof Hop> = {
  Hop: Hop,
  Yeast: Beaker,
  Fermentable: Wheat,
};
/**
 * 
 * @param param0 
 * @returns 
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
 */
export default function InventoryList({
  type,
  onClick,
  items = [],
}: InventoryListProps) {
  // const Comp = comps[type ?? "default"];
  return (
    <div>
      {items.map((item) => (
        <InventoryListItem
          key={item.id}
          // type={type}
          Icon={Icons[type!]}
          src={item}
          // label={item.origin.name}
          // name={item.name}
          // amount={item.amount}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
