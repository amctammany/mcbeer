import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import React from "react";
import { HopIngredientItem } from "./HopIngredientItem";
import { FermentableIngredientItem } from "./FermentableIngredientItem";
import { YeastIngredientItem } from "./YeastIngredientItem";
export type RecipeDisplayProps = {
  src: AdjustedRecipeType;
};

export default function RecipeDisplay({ src }: RecipeDisplayProps) {
  const totalFermentables = src.fermentableIngredients?.reduce(
    (acc, f) => acc + f.amount.value,
    0,
  );
  return (
    <div>
      <div className="lg:p-2 lg:gap-2 *:mb-1 grid  lg:grid-cols-3 lg:col-span-2 mx-auto">
        <Section title="General">
          <Prop label="Name" value={src.name} />
          <Prop label="Owner" value={src.owner.name} />
          <Prop label="Description" value={src.description} />
        </Section>
        <Section title="Equipment">
          <AmountProp label="Boil Time" name="boilTime" value={src.boilTime} />
          <AmountProp
            label="Efficiency"
            name="brewEfficiency"
            value={src.brewEfficiency}
          />
          <AmountProp
            label="Batch Volume"
            name="batchVolume"
            value={src.batchVolume}
          />
        </Section>
        <Section title="Style">
          <Prop label="Style" value={src.styleIdentifier} />
        </Section>
        <Section title="Ingredients" className="lg:col-span-3">
          {(src.hopIngredients ?? []).map((hop, index) => (
            <HopIngredientItem src={hop} key={index} />
          ))}
          {(src.fermentableIngredients ?? []).map((ferm, index) => (
            <FermentableIngredientItem
              src={ferm}
              key={index}
              index={index}
              totalFermentables={totalFermentables}
            />
          ))}
          {(src.yeastIngredients ?? []).map((yeast, index) => (
            <YeastIngredientItem src={yeast} key={index} />
          ))}
        </Section>
      </div>
    </div>
  );
}
