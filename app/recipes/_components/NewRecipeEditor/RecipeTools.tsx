import React from "react";
import { RecipeType } from "@/types/Recipe";
import clsx from "clsx";
import IconButton from "@/components/Button/IconButton";
import { BicepsFlexedIcon, PercentIcon, ScaleIcon } from "lucide-react";

export type RecipeToolsProps = {
  src?: RecipeType;
  className?: string;
};

export default function RecipeTools({ src, className }: RecipeToolsProps) {
  return (
    <div className={clsx("border-3 border-grey-300 rounded-md m-2", className)}>
      <div className={clsx("border-b-2 m-0 px-4 py-2 rounded-sm flex gap-2")}>
        <IconButton
          icon={BicepsFlexedIcon}
          className="bg-red-200 hover:bg-red-100"
        >
          Adjust Gravity
        </IconButton>
        <IconButton icon={ScaleIcon} className="bg-red-200 hover:bg-red-100">
          Scale Recipe
        </IconButton>
        <IconButton icon={PercentIcon} className="bg-red-200 hover:bg-red-100">
          Fermentable Percentage
        </IconButton>
      </div>
    </div>
  );
}
