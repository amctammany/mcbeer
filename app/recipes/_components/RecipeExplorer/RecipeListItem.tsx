"use client";
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
import {
  BookOpenIcon,
  CopyPlusIcon,
  ForkKnifeCrossedIcon,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { duplicateRecipe } from "../../actions";

export type RecipeListItemProps = {
  recipe: Partial<BaseRecipeType>;
  userId: string;
  index: number;
};
export default function RecipeListItem({
  recipe,
  userId,
  index,
}: RecipeListItemProps) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <ListItem size="sm">
        <ListItemIcon>
          <BookOpenIcon />
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>
            {recipe.name} - {recipe.styleIdentifier}
          </ListItemTitle>
        </ListItemContent>
        <ListItemMenu>
          <DropdownMenu>
            <DropdownMenuTrigger render={<IconButton icon={MenuIcon} />}>
              Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={async () => {
                  const dupe = await duplicateRecipe(recipe.id!, userId);
                  console.log(dupe);
                }}
                id="hop"
                data-index={index}
              >
                <CopyPlusIcon />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem>Move</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ListItemMenu>
      </ListItem>
    </Link>
  );
}
