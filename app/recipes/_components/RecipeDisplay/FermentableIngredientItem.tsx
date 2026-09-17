import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import BadgeProp from "@/components/Prop/BadgeProp";
import { WheatIcon, ScaleIcon, TimerIcon, BeakerIcon } from "lucide-react";

export function FermentableIngredientItem({ index, src, onClick }: any) {
  return (
    <ListItem onClick={onClick}>
      <ListItemIcon>
        <WheatIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="alpha"
            text={src.amount?.value}
            unit="%"
          />

          <b>{src.fermentable?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<ScaleIcon size={12} />}
                name="amount"
                text={src.amount.value}
                unit={src.amount.unit}
              />

              <BadgeProp
                Icon={<TimerIcon size={12} />}
                name="color"
                text={src.color.value}
                unit={src.color.unit}
              />
              <BadgeProp
                Icon={<BeakerIcon size={12} />}
                name="usage"
                text={src.usage}
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
    </ListItem>
  );
}

export default FermentableIngredientItem;
