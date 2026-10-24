import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import BadgeProp from "@/components/Prop/BadgeProp";
import { Avatar } from "@/components/ui/avatar";
import {
  AdjustedFermentationStepType,
  AdjustedMashStepType,
  FermentationStepType,
} from "@/types/Profile";
import { AdjustedRecipeType, RecipeType } from "@/types/Recipe";
import {
  ClipboardClockIcon,
  CookingPotIcon,
  PaletteIcon,
  ScaleIcon,
  ThermometerIcon,
  TimerIcon,
  TriangleRightIcon,
  WheatIcon,
} from "lucide-react";
import React, { MouseEventHandler } from "react";
import { useFormContext } from "react-hook-form";

export type FermentationStepProps = {
  src: AdjustedFermentationStepType;
  index: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
export default function FermentationStep({
  src,
  index,
  onClick,
}: FermentationStepProps) {
  const form = useFormContext<AdjustedRecipeType>();
  return (
    <ListItem onClick={onClick}>
      <input
        type="hidden"
        {...form.register(`fermentationSteps.${index}.index`)}
        value={src.id ?? ""}
      />
      <input
        type="hidden"
        {...form.register(`fermentationSteps.${index}.id`)}
        value={src.id ?? ""}
      />

      <input
        type="hidden"
        // name={`fermentationSteps.${index}.amount.value`}
        {...form.register(`fermentationSteps.${index}.time.value`)}
        value={src?.time.value ?? 0}
      />
      <input
        type="hidden"
        {...form.register(`fermentationSteps.${index}.time.unit`)}
        value={src?.time.unit ?? ""}
      />
      <input
        type="hidden"
        {...form.register(`fermentationSteps.${index}.temperature.value`)}
        value={src?.temperature?.value ?? 0}
      />
      <input
        type="hidden"
        {...form.register(`fermentationSteps.${index}.temperature.unit`)}
        value={src?.temperature?.unit ?? ""}
      />
      <input
        type="hidden"
        // name={`fermentationSteps.${index}.amount.value`}
        {...form.register(`fermentationSteps.${index}.rampTime.value`)}
        value={src?.rampTime?.value ?? 0}
      />
      <input
        type="hidden"
        {...form.register(`fermentationSteps.${index}.rampTime.unit`)}
        value={src?.rampTime?.unit ?? ""}
      />

      <ListItemIcon>
        <Avatar className="bg-blue-200 ">
          <b className="m-auto">{index}</b>
        </Avatar>
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <b>{src?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow overflow-auto">
          <div className="grow min-w-  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row lg:grid-cols-3 gap-1 lg:gap-2">
              <BadgeProp
                Icon={<ThermometerIcon size={12} />}
                name="Temperature"
                text={src.temperature?.value}
                unit={src.temperature?.unit}
              />
              <BadgeProp
                Icon={<TimerIcon size={12} />}
                name="time"
                text={src.time?.value}
                unit={src.time?.unit}
              />
              <BadgeProp
                Icon={<TriangleRightIcon size={12} />}
                name="rampTime"
                text={src.rampTime?.value}
                unit={src.rampTime?.unit}
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
    </ListItem>
  );
}
