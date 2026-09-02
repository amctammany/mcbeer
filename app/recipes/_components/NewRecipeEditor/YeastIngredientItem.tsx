import IconButton from "@/components/Button/IconButton";
import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemMenu from "@/components/Form/List/ListItemMenu";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import { AmountProp } from "@/components/Prop/AmountProp";
import BadgeProp from "@/components/Prop/BadgeProp";
import Prop from "@/components/Prop/Prop";
import { IngredientContext } from "@/contexts/IngredientContext";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { UnitNames, UnitTypes } from "@/lib/Converter/UnitDict";
import { AdjustedYeastIngredientType } from "@/types/Recipe";
import {
  BeakerIcon,
  WheatIcon,
  Icon,
  MenuIcon,
  ScaleIcon,
  TimerIcon,
  PaletteIcon,
  CookingPotIcon,
  BadgePercentIcon,
} from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";

export type YeastIngredientItemProps = {
  src: AdjustedYeastIngredientType;
  index?: number;
  onClick?: React.MouseEventHandler;
};
function UnitValueProp({
  src,
  unit,
}: {
  src?: UnitValue | number;
  unit?: UnitNames;
}) {
  return typeof src === "number" ? (
    <UnitValueProp src={{ value: src, unit: unit! }} />
  ) : (
    <div>
      <b>{src?.value}</b>
      <span>{src?.unit}</span>
    </div>
  );
}

export default function YeastIngredientItem({
  src,
  index,
  onClick,
}: YeastIngredientItemProps) {
  const ctx = React.useContext(IngredientContext);
  const form = useFormContext();
  const yeasts = React.use(ctx.yeastPromise);
  const yeast = yeasts.find((h) => h.id === src.yeastId);
  return (
    <ListItem onClick={onClick}>
      <input
        type="hidden"
        {...form.register(`yeastIngredients.${index}.id`)}
        value={src.id}
      />
      <input
        type="hidden"
        {...form.register(`yeastIngredients.${index}.yeastId`)}
        value={src.yeastId}
      />

      <input
        type="hidden"
        {...form.register(`yeastIngredients.${index}.recipeId`)}
        value={src.recipeId}
      />
      <input
        type="hidden"
        {...form.register(`yeastIngredients.${index}.amount.value`)}
        value={src?.amount.value}
      />
      <input
        type="hidden"
        {...form.register(`yeastIngredients.${index}.amount.unit`)}
        value={src?.amount.unit}
      />
      <input
        type="hidden"
        {...form.register(`yeastIngredients.${index}.attenuation.value`)}
        value={src?.attenuation?.value}
      />
      <input
        type="hidden"
        {...form.register(`yeastIngredients.${index}.attenuation.unit`)}
        value={src?.attenuation?.unit}
      />
      <ListItemIcon>
        <WheatIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <div className="min-w-8 mx-2 text-md">
            <span>{src.amount?.value}</span>
            <span className="px-1">{src.amount?.unit}</span>
            <span className="text-sm">(? %)</span>
          </div>
          <b>{yeast?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<BadgePercentIcon size={12} />}
                name="attenuation"
                text={src.attenuation?.value}
                unit={src.attenuation?.unit}
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
      <ListItemMenu>
        <IconButton icon={MenuIcon} label="Menu" />
      </ListItemMenu>
    </ListItem>
  );
}
