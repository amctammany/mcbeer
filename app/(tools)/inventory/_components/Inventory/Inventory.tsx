"use client";
import Section from "@/components/Section";
import { InventoryItemType, InventoryType } from "@/types/Inventory";
import React, { useActionState } from "react";
import InventoryList from "../InventoryList/InventoryList";
import AddInventoryButton from "./AddInventoryButton";
import AddHopForm from "./AddHopForm";
import { addToInventory } from "../../actions";
import { Option } from "@/components/Form/Combobox";

export type InventoryProps = {
  src: InventoryType;
  hops: Option[];
  getHopNames: Promise<Option[]>;
  getFermentableNames: Promise<Option[]>;
  getYeastNames: Promise<Option[]>;
};

export default function Inventory({ src, hops, getHopNames }: InventoryProps) {
  const [state, formAction] = useActionState(addToInventory, {
    success: true,
    data: src,
  });

  return (
    <div className="grid grid-cols-2 max-w-3xl m-auto gap-4">
      <Section
        title="Hops"
        actions={
          <AddInventoryButton type="Hop">
            <AddHopForm
              action={formAction}
              inventoryId={src?.id}
              options={hops}
              getOptions={getHopNames}
            />
          </AddInventoryButton>
        }
      >
        <InventoryList type="Hop" items={state.data?.hopInventoryItems} />
      </Section>
      <Section title="Yeasts" actions={<AddInventoryButton type="Yeast" />}>
        <InventoryList type="Yeast" items={state.data?.yeastInventoryItems} />
      </Section>
      <Section
        title="Fermentables"
        actions={<AddInventoryButton type="Fermentable" />}
      >
        <InventoryList
          type="Fermentable"
          items={state.data?.fermentableInventoryItems}
        />
      </Section>
      <Section title="Other"></Section>
    </div>
  );
}
