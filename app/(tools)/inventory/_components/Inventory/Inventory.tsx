import Section from "@/components/Section";
import { InventoryItemType, InventoryType } from "@/types/Inventory";
import React from "react";
import InventoryList from "../InventoryList/InventoryList";
import AddInventoryButton from "./AddInventoryButton";

export type InventoryProps = {
  src?: InventoryType;
};

export default function Inventory({ src }: InventoryProps) {
  return (
    <div className="grid grid-cols-2 max-w-3xl m-auto gap-4">
      <Section title="Hops" actions={<AddInventoryButton type="Hop" />}>
        <InventoryList type="Hop" items={src?.hopInventoryItems} />
      </Section>
      <Section title="Yeasts" actions={<AddInventoryButton type="Yeast" />}>
        <InventoryList type="Yeast" items={src?.yeastInventoryItems} />
      </Section>
      <Section
        title="Fermentables"
        actions={<AddInventoryButton type="Fermentable" />}
      >
        <InventoryList
          type="Fermentable"
          items={src?.fermentableInventoryItems}
        />
      </Section>
      <Section title="Other"></Section>
    </div>
  );
}
