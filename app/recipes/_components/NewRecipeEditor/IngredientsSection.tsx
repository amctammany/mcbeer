"use client";
import IconButton from "@/components/Button/IconButton";
import styles from "./IngredientSection.module.css";
import AmountField from "@/components/Form/AmountField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { TopBar } from "@/components/TopBar/TopBar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import { Dialog as _Dialog } from "@base-ui/react/dialog";
import {
  HeartPulseIcon,
  HopIcon,
  PlusIcon,
  ShoppingBagIcon,
  WheatIcon,
} from "lucide-react";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { ModalContext } from "@/contexts/ModalContext";
import { useStateMachine } from "little-state-machine";
// import HopIngredientItem from "./HopIngredientItem";
import { Item } from "@/components/ui/item";
// import FermentableIngredientItem from "./FermentableIngredientItem";
import List from "@/components/Form/List/List";
import HopIngredientItem from "./HopIngredientItem";
import FermentableIngredientItem from "./FermentableIngredientItem";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { FormStateContext } from "@/contexts/FormStateContext";
import YeastIngredientItem from "./YeastIngredientItem";
// const HopIngredientModal = dynamic(
// () => import("./IngredientModals/HopIngredientModal"),
// { ssr: false },
// );

// const demoDialog = _Dialog.createHandle<{ text: string }>();

function IngredientsSectionToolbar(
  {
    // handleDialogOpen,
  }: {
    src?: RecipeType;
    // handleDialogOpen: (id: string) => () => void;
  },
) {
  const { open, handleDialogOpen, triggerId } = useContext(ModalContext);
  return (
    <div className="flex items-center lg:gap-2 px-1 lg:px-4">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<IconButton icon={PlusIcon} label="Add" />}
        ></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={handleDialogOpen({ type: "hop", id: undefined })}
            id="hop"
          >
            <HopIcon />
            Add Hop
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleDialogOpen("fermentable")}
            id="fermentable"
          >
            <WheatIcon />
            Add Fermentable
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleDialogOpen("yeast")} id="yeast">
            <HeartPulseIcon />
            Add Yeast
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDialogOpen("other")} id="other">
            <ShoppingBagIcon />
            Add Other
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
/**
 * 
            <IconButton icon={HopIcon} label="Add Hop" />
            <IconButton icon={WheatIcon} label="Add Fermentable" />
            <IconButton icon={HeartPulseIcon} label="Add Yeast" />
            <IconButton icon={ShoppingBagIcon} label="Add Other" />
 */
export default function IngredientsSection({ src }: { src: RecipeType }) {
  // const [open, setOpen] = React.useState(true);
  // const [triggerId, setTriggerId] = React.useState<string | null>("hop");
  // const handleOpenChange = (
  //   isOpen: boolean,
  //   eventDetails: _Dialog.Root.ChangeEventDetails,
  // ) => {
  //   setOpen(isOpen);
  //   setTriggerId(eventDetails.trigger?.id ?? null);
  // };
  // const handleDialogOpen = (id?: string) => () => {
  //   setOpen(id === undefined ? false : true);
  //   setTriggerId(id === undefined ? null : id);
  // };

  const { getValues, watch, control } = useFormContext<AdjustedRecipeType>();

  const yeastIngArray = useFieldArray({
    name: "yeastIngredients",
    control,
    keyName: "_id",
  });
  const hopIngArray = useFieldArray({
    name: "hopIngredients",
    control,
    keyName: "_id",
  });
  const fermentableIngArray = useFieldArray({
    name: "fermentableIngredients",
    control,
    keyName: "_id",
  });
  const hopIngredients = hopIngArray.fields;
  const fermentableIngredients = fermentableIngArray.fields;

  // const _hopIngredients = useWatch({ name: "hopIngredients", control });
  const watchYeasts = watch("yeastIngredients", []);
  const _yeastIngredients = yeastIngArray.fields.map((field, index) => {
    return {
      ...field,
      ...watchYeasts[index],
    };
  });
  const watchHops = watch("hopIngredients", []);
  const _hopIngredients = hopIngArray.fields
    .map((field, index) => {
      return {
        ...field,
        ...watchHops[index],
      };
    })
    .sort((a, b) => b.duration.value - a.duration.value);
  const watchFerms = watch("fermentableIngredients", []);
  const _fermentableIngredients = fermentableIngArray.fields.map(
    (field, index) => {
      return {
        ...field,
        ...watchFerms[index],
      };
    },
  );
  // .sort((a, b) => b.amount.value - a.amount.value);
  const totalFermentables = _fermentableIngredients?.reduce(
    (acc, f) => acc + f.amount.value,
    0,
  );

  const { handleDialogOpen } = useContext(ModalContext);

  const handleClick: (d: any) => React.MouseEventHandler<HTMLDivElement> = (
    d,
  ) => handleDialogOpen(d);
  return (
    <Section
      title="Ingredients"
      actions={
        <IngredientsSectionToolbar
        // handleDialogOpen={handleDialogOpen}
        />
      }
    >
      <List className="min-h-40 flex flex-col  w-full" size="small">
        {_hopIngredients.map((i: any, index: any) => (
          <HopIngredientItem
            key={i._id}
            index={index}
            src={i}
            onClick={handleClick({ type: "hop", id: i.id, index })}
            actions={{ remove: () => hopIngArray.remove(index) }}
          />
        ))}
        {JSON.stringify(_fermentableIngredients)}

        {_fermentableIngredients.map((i: any, index: any) => (
          <FermentableIngredientItem
            totalFermentables={totalFermentables}
            key={i._id}
            index={index}
            src={i}
            actions={{ remove: () => fermentableIngArray.remove(index) }}
            onClick={handleClick({ type: "fermentable", id: i.id, index })}
          />
        ))}
        {_yeastIngredients.map((i: any, index: any) => (
          <YeastIngredientItem
            key={i._id}
            index={index}
            src={i}
            actions={{ remove: () => yeastIngArray.remove(index) }}
            onClick={handleClick({ type: "yeast", id: i._id, index })}
          />
        ))}
      </List>
    </Section>
  );
}
