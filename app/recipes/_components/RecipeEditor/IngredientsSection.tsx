"use client";
import IconButton from "@/components/Button/IconButton";
import AmountField from "@/components/Form/AmountField";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { TopBar } from "@/components/TopBar/TopBar";
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
import {
  HeartPulseIcon,
  HopIcon,
  PlusIcon,
  ShoppingBagIcon,
  WheatIcon,
} from "lucide-react";
import React from "react";

function IngredientsSectionToolbar({ src }: { src: RecipeType }) {
  return (
    <TopBar>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IconButton icon={PlusIcon} label="Add" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <HopIcon />
            Add Hop
          </DropdownMenuItem>
          <DropdownMenuItem>
            <WheatIcon />
            Add Fermentable
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HeartPulseIcon />
            Add Yeast
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShoppingBagIcon />
            Add Other
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TopBar>
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
  return (
    <Section
      title="Ingredients"
      actions={<IngredientsSectionToolbar src={src} />}
    >
      <div className="min-h-40">Ing</div>
    </Section>
  );
}
