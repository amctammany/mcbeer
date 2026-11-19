import IconButton from "@/components/Button/IconButton";
import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemMenu from "@/components/Form/List/ListItemMenu";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import BadgeProp from "@/components/Prop/BadgeProp";
import { ResponsiveIconProps } from "@/components/ResponsiveIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IngredientContext } from "@/contexts/IngredientContext";
import { RevisionContext } from "@/contexts/RevisionContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { UnitValue } from "@/lib/Converter/adjustUnits";
import { UnitNames } from "@/lib/Converter/UnitDict";
import {
  AdjustedFermentableIngredientType,
  AdjustedRecipeType,
} from "@/types/Recipe";
import {
  CopyPlusIcon,
  ReplaceIcon,
  WheatIcon,
  MenuIcon,
  ScaleIcon,
  PaletteIcon,
  CookingPotIcon,
  DeleteIcon,
} from "lucide-react";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
type FermentableIngredientItemMenuProps = {
  handleSubstitute: React.MouseEventHandler;
  handleDuplicate: React.MouseEventHandler;
  handleRemove: React.MouseEventHandler;
  size?: ResponsiveIconProps["size"];
  index: number;
};
function FermentableIngredientItemMenu({
  handleSubstitute,
  handleDuplicate,
  handleRemove,
  index,
  size,
}: FermentableIngredientItemMenuProps) {
  const revisionContext = useContext(RevisionContext);
  const f = useFormContext();
  // const handleSubstitute = (e: any) => {
  //   const old = f.getValues(`fermentableIngredients`);

  //   revisionContext?.update({
  //     type: "SET",
  //     payload: {
  //       name: `fermentableIngredients`,
  //       prev: old,
  //       value: old.filter(({ id: _id }: any) => _id !== old[index].id),
  //     },
  //   });
  //   removeFermentable(e);
  // };
  // const handleDuplicate = (e: any) => {
  //   const old = f.getValues(
  //     `fermentableIngredients.${e.currentTarget.dataset["index"]}`,
  //   );

  //   revisionContext?.update({
  //     type: "ADD",
  //     payload: {
  //       name: `fermentableIngredients`,
  //       // prev: old,
  //       value: old.filter(({ id: _id }: any) => _id !== old[index].id),
  //     },
  //   });
  // };
  // const handleRemove = (e: any) => {
  //   // const old = f.getValues(`fermentableIngredients`);
  //   const old = f.getValues(
  //     `fermentableIngredients.${e.currentTarget.dataset["index"]}`,
  //   );

  //   revisionContext?.update({
  //     type: "REMOVE",
  //     payload: {
  //       name: `fermentableIngredients`,
  //       prev: old,
  //       value: old.filter(({ id: _id }: any) => _id !== old[index].id),
  //     },
  //   });
  //   removeFermentable(e);
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<IconButton icon={MenuIcon} label="Menu" size="xs" />}
      ></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={handleDuplicate}
          id="fermentable"
          data-index={index}
        >
          <CopyPlusIcon />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleSubstitute}
          id="fermentable"
          data-index={index}
        >
          <ReplaceIcon />
          Substitute
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleRemove}
          id="fermentable"
          data-index={index}
        >
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
  const handleDuplicate = () => actions.duplicate?.(index);
  const handleSubstitute = () => actions.substitute?.(index);

  const handleRemove = () => {
    // console.log(actions.remove);
    actions.remove?.(index);
    // const old = form.getValues(
    // "fermentableIngredients",
    // ) as BaseFermentableIngredientType[];
    // const newValue = old.filter(({ id: _id }) => _id !== src.id);
    // form.setValue("fermentableIngredients", newValue);
  };
  // const size = useMediaQuery("(min-width: 768px)") ? "default" : "xs";
  return (
    <ListItem onClick={onClick}>
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.id`)}
        value={src.id ?? ""}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.fermentableId`)}
        value={src.fermentableId ?? ""}
      />
      <input
        type="hidden"
        // name={`fermentableIngredients.${index}.usage`}
        {...form.register(`fermentableIngredients.${index}.usage`)}
        value={src.usage ?? "Mash"}
      />

      <input
        type="hidden"
        // name={`fermentableIngredients.${index}.recipeId`}
        {...form.register(`fermentableIngredients.${index}.recipeId`)}
        value={src.recipeId ?? ""}
      />
      <input
        type="hidden"
        // name={`fermentableIngredients.${index}.amount.value`}
        {...form.register(`fermentableIngredients.${index}.amount.value`)}
        value={src?.amount.value ?? 0}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.amount.unit`)}
        value={src?.amount.unit ?? ""}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.color.value`)}
        value={src?.color?.value ?? 0}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.color.unit`)}
        value={src?.color?.unit ?? ""}
      />

      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.potential.value`)}
        value={src?.potential?.value ?? 0}
      />
      <input
        type="hidden"
        {...form.register(`fermentableIngredients.${index}.potential.unit`)}
        value={src?.potential?.unit ?? ""}
      />

      <ListItemIcon icon={WheatIcon} size="sm" />

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount?.value}
            unit={src.amount?.unit}
          />
          <b className="grow">{fermentable?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow w-full">
          <div className="grow min-w-52  grid justify-items-end overflow-x-auto">
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
          // size={size}
          handleDuplicate={handleDuplicate}
          handleSubstitute={handleSubstitute}
          handleRemove={handleRemove}
          index={index}
        />
      </ListItemMenu>
    </ListItem>
  );
}
