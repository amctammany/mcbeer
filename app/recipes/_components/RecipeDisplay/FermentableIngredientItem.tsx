import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import BadgeProp from "@/components/Prop/BadgeProp";
import { ExtendedFermentableIngredientType } from "@/types/Recipe";
import { WheatIcon, ScaleIcon, TimerIcon, BeakerIcon } from "lucide-react";

export type FermentableIngredientItemProps = {
  index: number;
  totalFermentables: number;
  src: ExtendedFermentableIngredientType;
  onClick?: () => void;
};
export function FermentableIngredientItem({
  index,
  totalFermentables,
  src,
  onClick,
}: FermentableIngredientItemProps) {
  return (
    <ListItem onClick={onClick}>
      <ListItemIcon>
        <WheatIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount.value}
            unit={src.amount.unit}
          />
          <b>{src.fermentable?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<TimerIcon size={12} />}
                name="color"
                text={src.color?.value}
                unit={src.color?.unit}
              />
              <BadgeProp
                Icon={<BeakerIcon size={12} />}
                name="usage"
                text={src.usage}
              />
              <BadgeProp
                Icon={<ScaleIcon size={12} />}
                name="percentage"
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
    </ListItem>
  );
}

export default FermentableIngredientItem;
