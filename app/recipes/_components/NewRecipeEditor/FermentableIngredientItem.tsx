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
  AdjustedFermentableIngredientType,
  AdjustedRecipeType,
  BaseFermentableIngredientType,
} from "@/types/Recipe";
import {
  BeakerIcon,
  WheatIcon,
  Icon,
  MenuIcon,
  ScaleIcon,
  TimerIcon,
  PaletteIcon,
  CookingPotIcon,
  DeleteIcon,
} from "lucide-react";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
type FermentableIngredientItemMenuProps = {
  removeFermentable: React.MouseEventHandler;
  index: number;
};
function FermentableIngredientItemMenu({
  removeFermentable,
  index,
}: FermentableIngredientItemMenuProps) {
  const revisionContext = useContext(RevisionContext);

  const f = useFormContext();
  const handleRemove = (e: any) => {
    const old = f.getValues(`fermentableIngredients`);

    revisionContext?.update({
      type: "REMOVE",
      payload: {
        name: `fermentableIngredients`,
        prev: old,
        value: old.filter(({ id: _id }: any) => _id !== old[index].id),
      },
    });
    removeFermentable(e);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<IconButton icon={MenuIcon} label="Menu" />}
      ></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleRemove} id="fermentable">
          <DeleteIcon />
          Delete Fermentable
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export type FermentableIngredientItemProps = {
  src: AdjustedFermentableIngredientType;
  actions: Record<string, any>;
  index: number;
  totalFermentables: number;
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
  actions,
  totalFermentables,
  index,
  onClick,
}: FermentableIngredientItemProps) {
  const ctx = React.useContext(IngredientContext);
  const form = useFormContext<AdjustedRecipeType>();
  const fermentables = React.use(ctx.fermentablePromise);
  const fermentable = fermentables.find((h) => h.id === src.fermentableId);
  const handleRemove = () => {
    // console.log(actions.remove);
    actions.remove?.(index);
    // const old = form.getValues(
    // "fermentableIngredients",
    // ) as BaseFermentableIngredientType[];
    // const newValue = old.filter(({ id: _id }) => _id !== src.id);
    // form.setValue("fermentableIngredients", newValue);
  };
  return (
    <ListItem onClick={onClick}>
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.id`)}
        value={src.id}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.fermentableId`)}
        value={src.fermentableId}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.usage`)}
        value={src.usage}
      />

      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.recipeId`)}
        value={src.recipeId}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.amount.value`)}
        value={src?.amount.value}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.amount.unit`)}
        value={src?.amount.unit}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.color.value`)}
        value={src?.color?.value}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.color.unit`)}
        value={src?.color?.unit}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.potential`)}
        value={src?.potential ?? ""}
      />

      <ListItemIcon>
        <WheatIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount?.value}
            unit={src.amount?.unit}
          />
          <b>{fermentable?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<PaletteIcon size={12} />}
                name="color"
                text={src.color?.value}
                unit={src.color?.unit}
              />
              <BadgeProp
                Icon={<CookingPotIcon size={12} />}
                name="usage"
                text={src.usage}
              />
              <BadgeProp
                Icon={<CookingPotIcon size={12} />}
                name="usage"
                text={(
                  (100 * (src.amount?.value ?? 0)) /
                  totalFermentables
                ).toFixed(1)}
                unit="%"
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
      <ListItemMenu>
        <FermentableIngredientItemMenu
          removeFermentable={handleRemove}
          index={index}
        />
      </ListItemMenu>
    </ListItem>
  );
}
