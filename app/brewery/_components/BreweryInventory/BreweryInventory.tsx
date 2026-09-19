import { BreweryType } from "@/types/Brewery";
import React from "react";
import BreweryInventoryToolbar from "./BreweryInventoryToolbar";

export type BreweryInventoryProps = {
  src: BreweryType;
  action: any;
};
export default function BreweryInventory({
  src,
  action,
}: BreweryInventoryProps) {
  return (
    <div>
      <BreweryInventoryToolbar src={src} />
    </div>
  );
}
