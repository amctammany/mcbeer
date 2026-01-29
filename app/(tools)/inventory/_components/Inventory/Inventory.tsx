import Section from "@/components/Section";
import { InventoryType } from "@/types/Inventory";
import React from "react";

export type InventoryProps = {
  src?: InventoryType;
};
export default function Inventory({ src }: InventoryProps) {
  return (
    <div>
      <Section title="Hops">{JSON.stringify(src?.hopInventoryItems)}</Section>
      <Section title="Yeasts">
        {JSON.stringify(src?.yeastInventoryItems)}
      </Section>
      <Section title="Fermentables">
        {JSON.stringify(src?.fermentableInventoryItems)}
      </Section>
    </div>
  );
}
