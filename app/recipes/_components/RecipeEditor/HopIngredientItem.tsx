import IconButton from "@/components/Button/IconButton";
import { AmountProp } from "@/components/Prop/AmountProp";
import BadgeProp from "@/components/Prop/BadgeProp";
import Prop from "@/components/Prop/Prop";
import { IngredientContext } from "@/contexts/IngredientContext";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { UnitNames, UnitTypes } from "@/lib/Converter/UnitDict";
import { AdjustedHopIngredientType } from "@/types/Recipe";
import {
  BeakerIcon,
  HopIcon,
  Icon,
  MenuIcon,
  ScaleIcon,
  TimerIcon,
} from "lucide-react";
import React from "react";

export type HopIngredientItemProps = {
  src: AdjustedHopIngredientType;
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
function ListItem({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="group/item w-full inline-flex items-center ">
      {children}
    </div>
  );
}
export default function HopIngredientItem({ src }: HopIngredientItemProps) {
  const ctx = React.useContext(IngredientContext);
  const hops = React.use(ctx.hopPromise);
  const hop = hops.find((h) => h.id === src.hopId);
  console.log(src);
  return (
    <ListItem>
      <div className="inline-flex gap-2 grow">
        <div className="">
          <HopIcon />
        </div>

        <BadgeProp
          Icon={<ScaleIcon size={12} />}
          name="alpha"
          text={src.alpha?.value}
          unit="%"
        />

        <div className="grow">
          <b>{hop?.name}</b>
        </div>
      </div>
      <div className="shrink min-w-64 grid grid-cols-3  justify-items-end items-center justify-end  ">
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
      <div className="shrink grid justify-items-end pr-2">
        <IconButton icon={MenuIcon} label="Menu" />
      </div>
    </ListItem>
  );
}
