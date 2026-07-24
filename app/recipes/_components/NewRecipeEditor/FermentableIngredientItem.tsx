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
import { AdjustedFermentableIngredientType } from "@/types/Recipe";
import {
  BeakerIcon,
  WheatIcon,
  Icon,
  MenuIcon,
  ScaleIcon,
  TimerIcon,
} from "lucide-react";
import React from "react";

export type FermentableIngredientItemProps = {
  src: AdjustedFermentableIngredientType;
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

export default function FermentableIngredientItem({
  src,
  onClick,
}: FermentableIngredientItemProps) {
  const ctx = React.useContext(IngredientContext);
  const fermentables = React.use(ctx.fermentablePromise);
  const fermentable = fermentables.find((h) => h.id === src.fermentableId);
  return (
    <ListItem onClick={onClick}>
      <ListItemIcon>
        <WheatIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount?.value}
            unit="%"
          />

          <b>{fermentable?.name}</b>
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
                name="potential"
                text={src.potential}
                unit={"D"}
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
      <ListItemMenu>
        <IconButton icon={MenuIcon} label="Menu" />
      </ListItemMenu>
    </ListItem>
  );
}
