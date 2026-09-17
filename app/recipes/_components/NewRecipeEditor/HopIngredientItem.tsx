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
  AdjustedHopIngredientType,
  BaseHopIngredientType,
} from "@/types/Recipe";
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

export type HopIngredientItemProps = {
  src: AdjustedHopIngredientType;
  index: number;
  onClick?: React.MouseEventHandler;
  actions: Record<string, any>;
};
type HopIngredientItemMenuProps = {
  removeHop: React.MouseEventHandler;
  index: number;
};
function HopIngredientItemMenu({
  removeHop,
  index,
}: HopIngredientItemMenuProps) {
  const revisionContext = useContext(RevisionContext);

  const f = useFormContext();
  const handleRemove = (e: any) => {
    const old = f.getValues(`hopIngredients`);

    revisionContext?.update({
      type: "REMOVE",
      payload: {
        name: `hopIngredients`,
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
        <DropdownMenuItem onClick={handleRemove} id="hop">
          <DeleteIcon />
          Delete Hop
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default function HopIngredientItem({
  index,
  src: _src,
  actions,
  onClick,
}: HopIngredientItemProps) {
  const ctx = React.useContext(IngredientContext);
  const form = useFormContext();
  const hops = React.use(ctx.hopPromise);
  const src = form.getValues(`hopIngredients.${index}`);
  const handleRemove = () => {
    // console.log(actions.remove);
    // actions.remove?.(index);
    const old = form.getValues("hopIngredients") as BaseHopIngredientType[];
    const newValue = old.filter(({ id: _id }) => _id !== src.id);
    form.setValue("hopIngredients", newValue);
  };
  const hop = hops.find((h) => h.id === src.hopId);
  return (
    <ListItem onClick={onClick}>
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.id`)}
        value={src.id}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.hopId`)}
        value={src.hopId}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.usage`)}
        value={src.usage}
      />

      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.recipeId`)}
        value={src.recipeId}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.amount.value`)}
        value={src?.amount.value}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.amount.unit`)}
        value={src?.amount.unit}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.duration.value`)}
        value={src?.duration.value}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.duration.unit`)}
        value={src?.duration.unit}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.alpha.value`)}
        value={src?.alpha?.value}
      />
      <input
        type="hidden"
        {...form.register(`hopIngredients.${index}.alpha.unit`)}
        value={src?.alpha?.unit}
      />
      <ListItemIcon>
        <HopIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount?.value}
            unit={src.amount?.unit}
          />

          <b>{hop?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow md:min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-0 md:gap-1 lg:gap-2">
              <BadgeProp
                Icon={<CookingPotIcon size={12} />}
                name="alpha"
                text={src.alpha?.value}
                unit="%"
              />

              <BadgeProp
                Icon={<CookingPotIcon size={12} />}
                name="usage"
                text={src.usage}
              />
              <BadgeProp
                Icon={<TimerIcon size={12} />}
                name="duration"
                text={src.duration.value}
                unit={src.duration.unit}
              />

              <BadgeProp
                Icon={<ScaleIcon size={12} />}
                name="ibu"
                text={src.alpha?.value}
                unit="ibu"
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
      <ListItemMenu>
        <HopIngredientItemMenu removeHop={handleRemove} index={index} />
      </ListItemMenu>
    </ListItem>
  );
}
