import IconButton from "@/components/Button/IconButton";
import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemMenu from "@/components/Form/List/ListItemMenu";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { BaseRecipeType, RecipeType } from "@/types/Recipe";
import { ForkKnifeCrossedIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export type RecipeListItemProps = {
  recipe: BaseRecipeType;
};
export default function RecipeListItem({ recipe }: RecipeListItemProps) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <ListItem>
        <ListItemIcon>
          <ForkKnifeCrossedIcon />
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>
            {recipe.name} - {recipe.id}
          </ListItemTitle>
        </ListItemContent>
        <ListItemMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<IconButton icon={MenuIcon} label="Menu" />}
            ></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Hi</DropdownMenuItem>
              <DropdownMenuItem>You</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ListItemMenu>
      </ListItem>
    </Link>
  );
}
