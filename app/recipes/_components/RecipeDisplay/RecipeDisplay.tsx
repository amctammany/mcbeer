import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { RecipeType } from "@/types/Recipe";
import React from "react";

export type RecipeDisplayProps = {
  src: RecipeType;
};
export default function RecipeDisplay({ src }: RecipeDisplayProps) {
  return (
    <div>
      <div className="lg:p-2 lg:gap-2 *:mb-1 *:px-2 grid  lg:grid-cols-3 lg:col-span-2 mx-auto">
        <Section title="General">
          <Prop label="Name" value={src.name} />
          <Prop label="Owner" value={src.owner.name} />
          <Prop label="Description" value={src.description} />
        </Section>
        <Section title="Equipment">
          <AmountProp
            label="Efficiency"
            name="brewEfficiency"
            value={src.brewEfficiency}
          />
          <AmountProp
            label="Batch Size"
            name="batchVolume"
            value={src.batchVolume}
          />
        </Section>
      </div>
    </div>
  );
}
