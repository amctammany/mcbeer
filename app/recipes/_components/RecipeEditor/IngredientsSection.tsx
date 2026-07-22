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
import { RecipeType } from "@/types/Recipe";
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
import HopIngredientItem from "./HopIngredientItem";
const HopIngredientModal = dynamic(
  () => import("./IngredientModals/HopIngredientModal"),
  { ssr: false },
);

const demoDialog = _Dialog.createHandle<{ text: string }>();

function IngredientsSectionToolbar({
  src,
  // handleDialogOpen,
}: {
  src: RecipeType;
  // handleDialogOpen: (id: string) => () => void;
}) {
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
  const { state } = useStateMachine();

  return (
    <Section
      title="Ingredients"
      actions={
        <IngredientsSectionToolbar
          src={src}
          // handleDialogOpen={handleDialogOpen}
        />
      }
    >
      <div className="min-h-40">
        {(state.hopIngredients || []).map((i: any, index) => (
          <HopIngredientItem key={index} src={i} />
        ))}
      </div>
    </Section>
  );
}
