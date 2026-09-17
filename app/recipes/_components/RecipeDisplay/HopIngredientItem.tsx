import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import BadgeProp from "@/components/Prop/BadgeProp";
import { HopIcon, ScaleIcon, TimerIcon, BeakerIcon } from "lucide-react";

export function HopIngredientItem({ index, src, onClick }: any) {
  return (
    <ListItem onClick={onClick}>
      <ListItemIcon>
        <HopIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount.value}
            unit={src.amount.unit}
          />

          <b>{src.hop?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<ScaleIcon size={12} />}
                name="alpha"
                text={src.alpha?.value}
                unit="%"
              />

              <BadgeProp
                Icon={<TimerIcon size={12} />}
                name="duration"
                text={src.duration.value}
                unit={src.duration.unit}
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
export default HopIngredientItem;
