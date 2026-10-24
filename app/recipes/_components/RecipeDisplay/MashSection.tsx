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
    <ListItem>
      <ListItemIcon>
        <Avatar size="sm" className="bg-blue-200 ">
          <b className="m-auto">{index}</b>
        </Avatar>
      </ListItemIcon>

      <ListItemContent className="overflow-auto">
        <ListItemTitle>
          <b>{src?.name}</b>
        </ListItemTitle>
        <ListItemDescription className="grow w-full md:w-it overflow-auto">
          <div className="grow flex min-w-52  justify-items-end mx-auto overflow-auto">
            <div className="flex row place-content-center lg:w-fit gap-1 lg:gap-2">
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
      <div className="grid overflow-auto ">
        <List>
          {mashSteps.map((fs, index) => (
            <MashStep key={fs.id} index={index} src={fs} />
          ))}
        </List>
      </div>
    </Section>
  );
}
