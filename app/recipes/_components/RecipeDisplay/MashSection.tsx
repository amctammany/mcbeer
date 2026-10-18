import List from "@/components/Form/List/List";
import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import { AmountProp } from "@/components/Prop/AmountProp";
import BadgeProp from "@/components/Prop/BadgeProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { Avatar } from "@/components/ui/avatar";
import { AdjustedRecipeType } from "@/types/Recipe";
import { ThermometerIcon, TimerIcon, TriangleRightIcon } from "lucide-react";
import React from "react";

const MashStep = ({ index, src }: { index: number; src: any }) => {
  return (
    <ListItem variant="outlined">
      <ListItemIcon>
        <Avatar className="bg-blue-200 ">
          <b className="m-auto">{index}</b>
        </Avatar>
      </ListItemIcon>

      <ListItemContent className="">
        <ListItemTitle>
          <b>{src?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow">
          <div className="grow min-w-52  grid justify-items-end ">
            <div className="w-full lg:w-fit flex flex-row gap-1 lg:gap-2">
              <BadgeProp
                Icon={<ThermometerIcon size={12} />}
                name="Temperature"
                text={src.temperature?.value}
                unit={src.temperature?.unit}
              />
              <BadgeProp
                Icon={<TimerIcon size={12} />}
                name="time"
                text={src.time?.value}
                unit={src.time?.unit}
              />
              <BadgeProp
                Icon={<TriangleRightIcon size={12} />}
                name="rampTime"
                text={src.rampTime?.value}
                unit={src.rampTime?.unit}
              />
            </div>
          </div>
        </ListItemDescription>
      </ListItemContent>
    </ListItem>
  );
};

export type MashSectionProps = {
  src: AdjustedRecipeType;
};
export default function MashSection({ src }: MashSectionProps) {
  const mashSteps = src?.MashProfile?.steps ?? [];
  return (
    <Section title="Mash">
      <Prop label="Mash Profile" value={src.MashProfile?.name} />
      <div className="grid ">
        <List>
          {mashSteps.map((fs, index) => (
            <MashStep key={fs.id} index={index} src={fs} />
          ))}
        </List>
      </div>
    </Section>
  );
}
