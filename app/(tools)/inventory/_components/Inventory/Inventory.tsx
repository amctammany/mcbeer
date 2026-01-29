"use client";
import Section from "@/components/Section";
import { InventoryItemType, InventoryType } from "@/types/Inventory";
import React, { use, useActionState } from "react";
import InventoryList from "../InventoryList/InventoryList";
import AddInventoryButton from "./AddInventoryButton";
import AddHopForm from "./AddHopForm";
import { addToInventory } from "../../actions";
import { Combobox, Option } from "@/components/Form/Combobox";
import { LinkButton } from "@/components/Button/LinkButton";
import { PlusCircle, PlusCircleIcon } from "lucide-react";
import IconButton from "@/components/Button/IconButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { type } from "os";
import { getFermentableNames } from "@/app/(ingredients)/fermentables/queries";

type SearchParams = { [key: string]: string | string[] | undefined };
export type InventoryProps = {
  src: InventoryType;
  hops: Option[];
  getHopNames: Promise<Option[]>;
  getFermentableNames: Promise<Option[]>;
  getYeastNames: Promise<Option[]>;
  searchParams?: SearchParams;
};

export default function Inventory({
  src,
  searchParams,
  hops,
  getHopNames,
  getYeastNames,
  getFermentableNames,
}: InventoryProps) {
  const [state, formAction] = useActionState(addToInventory, {
    success: true,
    data: src,
  });
  const type = searchParams?.hop
    ? "Hop"
    : searchParams?.yeast
      ? "Yeast"
      : searchParams?.fermentable
        ? "Fermentable"
        : undefined;
  const modalOpen = !!type;
  const getFns: Record<"Hop" | "Fermentable" | "Yeast", any> = {
    Hop: getHopNames,
    Yeast: getYeastNames,
    Fermentable: getFermentableNames,
  };

  const getOptions = type ? getFns[type] : () => ({});
  // const opts = use(getHopNames);
  return (
    <>
      <div className="grid grid-cols-2 max-w-3xl m-auto gap-4">
        <Section
          title="Hops"
          actions={
            <IconButton
              href="/inventory?hop=new"
              label="Add"
              icon={PlusCircle}
            />
          }
        >
          <InventoryList type="Hop" items={state.data?.hopInventoryItems} />
        </Section>
        <Section
          title="Yeasts"
          actions={
            <IconButton
              href="/inventory?yeast=new"
              label="Add"
              icon={PlusCircle}
            />
          }
        >
          <InventoryList type="Yeast" items={state.data?.yeastInventoryItems} />
        </Section>
        <Section
          title="Fermentables"
          actions={
            <IconButton
              href="/inventory?fermentable=new"
              label="Add"
              icon={PlusCircle}
            />
          }
        >
          <InventoryList
            type="Fermentable"
            items={state.data?.fermentableInventoryItems}
          />
        </Section>
        <Section title="Other"></Section>
      </div>
      <Dialog open={modalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add {type}</DialogTitle>
            <DialogDescription>Add to Inventory</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 relative">
            <AddHopForm
              action={formAction}
              type={type}
              inventoryId={state.data?.id}
              getOptions={getOptions}
            />
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
