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
import { BaseRecipeType, RecipeFolderType, RecipeType } from "@/types/Recipe";
import { FolderIcon, ForkKnifeCrossedIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export type RecipeFolderListItemProps = {
  folder: Partial<RecipeFolderType>;
};
export default function RecipeListItem({ folder }: RecipeFolderListItemProps) {
  return (
    <Link href={`/recipes/dir/${folder.pathname}`}>
      <ListItem size="sm">
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>
            {folder.name} - <i>({folder?.recipes?.length ?? 0})</i>
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
