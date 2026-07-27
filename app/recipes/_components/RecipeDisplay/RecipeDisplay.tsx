import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import React from "react";
import IconButton from "@/components/Button/IconButton";
import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemMenu from "@/components/Form/List/ListItemMenu";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import BadgeProp from "@/components/Prop/BadgeProp";
import {
  HopIcon,
  ScaleIcon,
  TimerIcon,
  BeakerIcon,
  MenuIcon,
} from "lucide-react";

export type RecipeDisplayProps = {
  src: AdjustedRecipeType;
};
function HopIngredientItem({ index, src, onClick }: any) {
  return (
    <ListItem onClick={onClick}>
      <ListItemIcon>
        <HopIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="alpha"
            text={src.alpha?.value}
            unit="%"
          />

          <b>{src.hop?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<ScaleIcon size={12} />}
                name="amount"
                text={src.amount.value}
                unit={src.amount.unit}
              />

              <BadgeProp
                Icon={<TimerIcon size={12} />}
                name="duration"
                text={src.duration.value}
                unit={src.duration.unit}
              />
              <BadgeProp
                Icon={<BeakerIcon size={12} />}
                name="usage"
                text={src.usage}
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
    </ListItem>
  );
}

export default function RecipeDisplay({ src }: RecipeDisplayProps) {
  return (
    <div>
      <div className="lg:p-2 lg:gap-2 *:mb-1 grid  lg:grid-cols-3 lg:col-span-2 mx-auto">
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
        <Section title="Style">
          <Prop label="Style" value={src.styleIdentifier} />
        </Section>
        <Section title="Ingredients" className="lg:col-span-3">
          {(src.hopIngredients ?? []).map((hop, index) => (
            <HopIngredientItem src={hop} key={index} />
          ))}
        </Section>
      </div>
    </div>
  );
}
