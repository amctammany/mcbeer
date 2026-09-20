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
  AdjustedYeastIngredientType,
  BaseYeastIngredientType,
} from "@/types/Recipe";
import {
  GermIcon,
  MenuIcon,
  BadgePercentIcon,
  ScaleIcon,
  DeleteIcon,
} from "lucide-react";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
type YeastIngredientItemMenuProps = {
  removeYeast: React.MouseEventHandler;
  index: number;
};
function YeastIngredientItemMenu({
  removeYeast,
  index,
}: YeastIngredientItemMenuProps) {
  const revisionContext = useContext(RevisionContext);

  const f = useFormContext();
  const handleRemove = (e: any) => {
    const old = f.getValues(`yeastIngredients`);

    revisionContext?.update({
      type: "REMOVE",
      payload: {
        name: `yeastIngredients`,
        prev: old,
        value: old.filter(({ id: _id }: any) => _id !== old[index].id),
      },
    });
    removeYeast(e);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<IconButton icon={MenuIcon} label="Menu" />}
      ></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleRemove} id="yeast">
          <DeleteIcon />
          Delete Yeast
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export type YeastIngredientItemProps = {
  src: AdjustedYeastIngredientType;
  actions: Record<string, any>;
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
  actions,
  index,
  onClick,
}: YeastIngredientItemProps) {
  const ctx = React.useContext(IngredientContext);
  const form = useFormContext();
  const yeasts = React.use(ctx.yeastPromise);
  const yeast = yeasts.find((h) => h.id === src.yeastId);
  const handleRemove = () => {
    // console.log(actions.remove);
    actions.remove?.(index);
    // const old = form.getValues("yeastIngredients") as BaseYeastIngredientType[];
    // const newValue = old.filter(({ id: _id }) => _id !== src.id);
    // form.setValue("yeastIngredients", newValue);
  };
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
        <GermIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount?.value}
            unit={src.amount?.unit}
          />

          <b>{yeast?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<BadgePercentIcon size={12} />}
                name="attenuation"
                text={src.attenuation?.value}
                unit={
                  src.attenuation?.unit === "percent"
                    ? "%"
                    : src.attenuation?.unit
                }
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
      <ListItemMenu>
        <YeastIngredientItemMenu removeYeast={handleRemove} index={index!} />
      </ListItemMenu>
    </ListItem>
  );
}
