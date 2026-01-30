import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { RecipeType } from "@/types/Recipe";
import React from "react";

export type RecipeDisplayProps = {
  src: RecipeType;
};
export default function RecipeDisplay({ src }: RecipeDisplayProps) {
  return (
    <div>
      <Prop label="Name" value={src.name} />
      <Prop label="Owner" value={src.owner.name} />
      <Prop label="Description" value={src.description} />
      <Prop label="Efficiency" value={src.brewEfficiency} />
      <AmountProp label="Batch Size" name="batchVolume" />
    </div>
  );
}
