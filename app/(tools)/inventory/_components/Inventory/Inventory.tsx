"use client";
import Section from "@/components/Section";
import { InventoryItemType, InventoryType } from "@/types/Inventory";
import React, { use, useActionState, useEffect, useState } from "react";
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

export type InventoryProps = {
  src: InventoryType;
  // hops: Option[];
  getHopNames: Promise<Option[]>;
  getFermentableNames: Promise<Option[]>;
  getYeastNames: Promise<Option[]>;
  // searchParams?: SearchParams;
};
type SelectedState =
  | {
      type?: InventoryItemType;
      name?: string;
    }
  | undefined;
const itemNameDict: Record<InventoryItemType, keyof InventoryType> = {
  Hop: "hopInventoryItems",
  Fermentable: "fermentableInventoryItems",
  Yeast: "yeastInventoryItems",
};
export default function Inventory({
  src,
  // searchParams,
  // hops,
  getHopNames,
  getYeastNames,
  getFermentableNames,
}: InventoryProps) {
  const [state, formAction] = useActionState(addToInventory, {
    success: true,
    data: { ...src, selected: undefined },
  });
  const [selected, setSelected] = useState<SelectedState>(undefined);

  /**
 *   const type = searchParams?.hop
    ? "Hop"
    : searchParams?.yeast
      ? "Yeast"
      : searchParams?.fermentable
        ? "Fermentable"
        : undefined;
 */
  // const selectedName =
  // searchParams?.hop ?? searchParams?.yeast ?? searchParams?.fermentable;
  const sel: SelectedState = selected;
  console.log(
    state.data,
    sel,
    state.data?.[sel?.type ? itemNameDict[sel.type] : "selected"],
  );
  const _selected =
    sel?.type !== undefined
      ? (state.data?.[itemNameDict[sel.type]] ?? []).find((s: any) => {
          return s.name === sel.name;
        })
      : undefined;
  // console.log({ data: state.data, type, selected, _selected });
  console.log({ data: state.data, selected, sel, _selected });
  const modalOpen = !!sel?.type;
  const getFns: Record<InventoryItemType, any> = {
    Hop: getHopNames,
    Yeast: getYeastNames,
    Fermentable: getFermentableNames,
  };

  const getOptions = selected?.type ? getFns[selected.type] : undefined;
  // const opts = use(getHopNames);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const n: SelectedState = {
      type: e.currentTarget.dataset.type as InventoryItemType,
      name: e.currentTarget.dataset.name,
    };
    setSelected(n);
    console.log(n);
  };
  const onSubmit = (d: any) => {
    console.log(d);
    setSelected(undefined);
  };
  const onOpenChange = (open: boolean) => {
    console.log(open);
    if (!open) setSelected(undefined);
  };
  return (
    <>
      <div className="grid grid-cols-2 *:max-w-2xl *:w-full justify-items-center m-auto gap-4 p-2 lg:p-4">
        <Section
          title="Hops"
          actions={
            <IconButton
              onClick={handleClick}
              data-type="Hop"
              label="Add"
              icon={PlusCircle}
            />
          }
        >
          <InventoryList
            onClick={handleClick}
            type="Hop"
            items={state.data?.hopInventoryItems}
          />
        </Section>
        <Section
          title="Yeasts"
          actions={
            <IconButton
              onClick={handleClick}
              data-type="Yeast"
              label="Add"
              icon={PlusCircle}
            />
          }
        >
          <InventoryList
            onClick={handleClick}
            type="Yeast"
            items={state.data?.yeastInventoryItems}
          />
        </Section>
        <Section
          title="Fermentables"
          actions={
            <IconButton
              onClick={handleClick}
              data-type="Fermentable"
              label="Add"
              icon={PlusCircle}
            />
          }
        >
          <InventoryList
            onClick={handleClick}
            type="Fermentable"
            items={state.data?.fermentableInventoryItems}
          />
        </Section>
        <Section title="Other"></Section>
      </div>
      <Dialog onOpenChange={onOpenChange} open={modalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add {selected?.type}</DialogTitle>
            <DialogDescription>Add to Inventory</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 relative">
            {sel?.type && (
              <AddHopForm
                src={_selected}
                action={formAction}
                onSubmit={onSubmit}
                type={sel?.type}
                inventoryId={state.data?.id}
                getOptions={getOptions}
              />
            )}
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
