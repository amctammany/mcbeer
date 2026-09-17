import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import BadgeProp from "@/components/Prop/BadgeProp";
import { GermIcon, ScaleIcon } from "lucide-react";

export function YeastIngredientItem({ index, src, onClick }: any) {
  return (
    <ListItem onClick={onClick}>
      <ListItemIcon>
        <GermIcon />
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <BadgeProp
            Icon={<ScaleIcon size={12} />}
            name="amount"
            text={src.amount.value}
            unit={src.amount.unit}
          />

          <b>{src.yeast?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<ScaleIcon size={12} />}
                name="attenuation"
                text={src.attenuation?.value}
                unit="%"
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
    </ListItem>
  );
}

export default YeastIngredientItem;
