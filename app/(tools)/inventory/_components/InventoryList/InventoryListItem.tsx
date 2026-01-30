import BadgeProp from "@/components/Prop/BadgeProp";
import Prop from "@/components/Prop/Prop";
import { Button } from "@/components/ui/button";
import { InventoryItemType, InventoryListItemType } from "@/types/Inventory";
import { InspectIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export type InventoryListItemProps = {
  Icon?: any;
  // type?: InventoryItemType;
  src: InventoryListItemType;
  // label?: string;
  // name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // amount: string | number;
};
export default function InventoryListItem({
  Icon = InspectIcon,
  onClick,
  // type,
  src,
  // label,
  // name,
  // amount,
}: InventoryListItemProps) {
  return (
    <button
      onClick={onClick}
      data-type={src.type}
      data-name={src.name}
      className="w-full list-item list-none py-2 group hover:bg-slate-200"
    >
      <div className="inline-flex w-full">
        <div className="shrink p-2 mx-2 my-auto ">
          <Icon />
        </div>
        <div className="flex grow my-auto ">
          <span className="grow text-xl group-hover:underline">
            {src?.origin.name}
          </span>
          <div className="px-2 font-extrabold">
            <h4>{src?.amount}</h4>
          </div>
        </div>
      </div>
    </button>
  );
}
