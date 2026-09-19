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
  actions: Record<string, any>;
};
type VesselItemMenuProps = {
  removeHop: React.MouseEventHandler;
  index: number;
};
function VesselItemMenu({ removeHop, index }: VesselItemMenuProps) {
  const revisionContext = useContext(RevisionContext);

  const f = useFormContext();
  const handleRemove = (e: any) => {
    const old = f.getValues(`vessels`);

    revisionContext?.update({
      type: "REMOVE",
      payload: {
        name: `vessels`,
        prev: old,
        value: old.filter(({ id: _id }: any) => _id !== old[index].id),
      },
    });
    removeHop(e);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<IconButton icon={MenuIcon} label="Menu" />}
      ></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleRemove} id="vessel">
          <DeleteIcon />
          Delete Vessel
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default function VesselItem({
  index,
  src: _src,
  actions,
  onClick,
}: VesselItemProps) {
  const ctx = React.useContext(IngredientContext);
  const form = useFormContext<AdjustedBreweryType>();
  const src = form.getValues(`vessels.${index}`);
  const handleRemove = () => {
    // console.log(actions.remove);
    // actions.remove?.(index);
    const old = form.getValues("vessels") as AdjustedVesselType[];
    const newValue = old.filter(({ id: _id }) => _id !== src.id);
    form.setValue("vessels", newValue);
  };
  return (
    <ListItem onClick={onClick}>
      <input
        type="hidden"
        {...form.register(`vessels.${index}.id`)}
        value={src.id}
      />
      <input
        type="hidden"
        {...form.register(`vessels.${index}.breweryId`)}
        value={src.breweryId}
      />
      <input
        type="hidden"
        {...form.register(`vessels.${index}.type`)}
        value={src.type}
      />

      <input
        type="hidden"
        {...form.register(`vessels.${index}.volume.value`)}
        value={src?.volume.value}
      />
      <input
        type="hidden"
        {...form.register(`vessels.${index}.volume.unit`)}
        value={src?.volume.unit}
      />
      <ListItemIcon>
        <HopIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
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
                unit="%"
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
      <ListItemMenu>
        <VesselItemMenu removeHop={handleRemove} index={index} />
      </ListItemMenu>
    </ListItem>
  );
}
