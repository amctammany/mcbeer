import BadgeProp from "@/components/Prop/BadgeProp";
import Prop from "@/components/Prop/Prop";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  AdjustedFermentationStepType,
  FermentationStepType,
} from "@/types/Profile";
import clsx from "clsx";
import { Thermometer, Timer, TriangleRight } from "lucide-react";
import React from "react";

export type FermentationStepListItemProps = {
  src: FermentationStepType;
};
export default function FermentationStepListItem({
  src,
}: FermentationStepListItemProps) {
  return (
    <div className="flex w-full">
      <div className="shrink m-auto mr-2">
        <Avatar>
          <AvatarFallback>{src.index}</AvatarFallback>
        </Avatar>
      </div>
      <div className="grow flex gap-2 flex-col">
        <div className="grow grid grid-flow-col auto-cols-auto gap-2 justify-items-stretch">
          <Prop label="Name" variant="inline">
            {src.name ?? src.type}
          </Prop>
          <Prop
            label="Type"
            variant="inline"
            className={clsx({ hidden: !src.name })}
          >
            {src.type}
          </Prop>
        </div>
        <div className="grow grid grid-flow-col auto-cols-auto gap-2 justify-items-stretch">
          <BadgeProp
            Icon={<Thermometer />}
            name="steps.temperature"
            text={src.temperature}
            unit={src.temperature}
          />
          <BadgeProp
            Icon={<Timer />}
            text={src.time}
            unit={src.time}
            name="steps.time"
          />
          <BadgeProp
            Icon={<TriangleRight />}
            name="steps.rampTime"
            text={src.rampTime}
            unit={src.rampTime}
          />
        </div>
      </div>
    </div>
  );
  /**
   * 
  return (
    <div className="lg:flex lg:flex-row grid grid-cols-2 text-sm lg:text-lg">
      <Prop label="Type" value={src?.type} />
      <Prop label="Time" value={src?.time} />
      <AmountProp
        label="Temperature"
        value={src?.temperature}
        unit={$Enums.UserTemperaturePreference.F}
      />
      <Prop label="Ramp Time" value={src?.rampTime} />
    </div>
  );
   */
}
