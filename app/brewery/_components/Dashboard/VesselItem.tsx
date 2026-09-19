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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IngredientContext } from "@/contexts/IngredientContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { UnitNames, UnitTypes } from "@/lib/Converter/UnitDict";
import {
  AdjustedBreweryType,
  AdjustedVesselType,
  BaseVesselType,
} from "@/types/Brewery";
import {
  BeakerIcon,
  CookingPotIcon,
  DeleteIcon,
  HopIcon,
  Icon,
  MenuIcon,
  PlusIcon,
  ScaleIcon,
  TimerIcon,
} from "lucide-react";
import { handler } from "next/dist/build/templates/app-route";
import React, { act, useContext } from "react";
import { useFormContext } from "react-hook-form";

export type VesselItemProps = {
  src: AdjustedVesselType;
  index: number;
  onClick?: React.MouseEventHandler;
  // actions: Record<string, any>;
};
type VesselItemMenuProps = {
  removeHop: React.MouseEventHandler;
  index: number;
};
export default function VesselItem({
  index,
  src,
  // actions,
  onClick,
}: VesselItemProps) {
  return (
    <ListItem onClick={onClick}>
      <ListItemIcon>
        <HopIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="volume"
            text={src.volume?.value}
            unit={src.volume?.unit}
          />

          <b>{src?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow md:min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-0 md:gap-1 lg:gap-2">
              <BadgeProp
                Icon={<CookingPotIcon size={12} />}
                name="type"
                text={src.type}
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
    </ListItem>
  );
}
