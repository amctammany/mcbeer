import BadgeProp from "@/components/Prop/BadgeProp";
import Prop from "@/components/Prop/Prop";
import { InventoryItemType } from "@/types/Inventory";
import { InspectIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export type InventoryListItemProps = {
  Icon?: any;
  type?: InventoryItemType;
  name: string;
  amount: string | number;
};
export default function InventoryListItem({
  Icon = InspectIcon,
  type,
  name,
  amount,
}: InventoryListItemProps) {
  return (
    <Link href={`/inventory?${(type ?? "").toLowerCase()}=${name}`}>
      <div className="list-item list-none py-2 group hover:bg-slate-200">
        <div className="inline-flex w-full">
          <div className="shrink p-2 mx-2 my-auto ">
            <Icon />
          </div>
          <div className="flex grow my-auto ">
            <span className="grow text-xl group-hover:underline">{name}</span>
            <div className="px-2 font-extrabold">
              <h4>{amount}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
