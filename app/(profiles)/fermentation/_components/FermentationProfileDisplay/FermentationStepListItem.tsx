import BadgeProp from "@/components/Prop/BadgeProp";
import Prop from "@/components/Prop/Prop";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AdjustedFermentationStepType } from "@/types/Profile";
import clsx from "clsx";
import { Thermometer, Timer, TriangleRight } from "lucide-react";
import React from "react";

export type FermentationStepListItemProps = {
  src: AdjustedFermentationStepType;
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
            className={clsx({ hidden: !!src.name })}
          >
            {src.type}
          </Prop>
        </div>
        <div className="grow grid grid-flow-col auto-cols-auto gap-2 justify-items-stretch">
          <BadgeProp
            Icon={Thermometer}
            text={src.temperature.value}
            unit={src.temperature.unit}
          />
          <BadgeProp Icon={Timer} text={src.time.value} unit={src.time.unit} />
          <BadgeProp
            Icon={TriangleRight}
            text={src.rampTime?.value}
            unit={src.rampTime?.unit}
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
