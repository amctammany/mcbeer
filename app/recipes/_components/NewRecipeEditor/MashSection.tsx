"use client";
import AmountField from "@/components/Form/AmountField";
import { ComboBoxField } from "@/components/Form/ComboBoxField";
import List from "@/components/Form/List/List";
import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import { TextField } from "@/components/Form/TextField";
import BadgeProp from "@/components/Prop/BadgeProp";
import Section from "@/components/Section";
import { Avatar } from "@/components/ui/avatar";
import { IngredientContext } from "@/contexts/IngredientContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { MashProfile } from "@/generated/prisma/client";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { MashProfileMask } from "@/lib/Converter/Masks";
import { MashStepType } from "@/types/Profile";
import { ExtendedRecipeType, RecipeType } from "@/types/Recipe";
import { ThermometerIcon, TimerIcon, TriangleRightIcon } from "lucide-react";
import React, { use, useContext } from "react";
import { useFormContext } from "react-hook-form";

function MashSectionToolbar() {
  const tools: any[] = [];
  return (
    <div className="flex gap-2">
      {tools.map((tool) => (
        <button key={tool.name} onClick={tool.onClick}>
          {tool.icon}
        </button>
      ))}
    </div>
  );
}
const MashStep = ({ index, src }: { index: number; src: any }) => {
  return (
    <ListItem size="sm">
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

export default function MashSection() {
  const { mashPromise } = useContext(IngredientContext);
  const prefs = useContext(UserPreferencesContext);
  const mashProfiles = use(mashPromise);
  const ctx = useFormContext<RecipeType>();
  const profile =
    mashProfiles.find(({ id }) => id === ctx.getValues("mashProfileId")) ?? {};
  const adj = adjustUnits({
    src: profile,
    mask: MashProfileMask,
    prefs,
    dir: true,
    inline: false,
  });
  return (
    <Section title="Mash" actions={<MashSectionToolbar />}>
      <ComboBoxField
        name="mashProfileId"
        label="Mash Profile"
        options={mashProfiles.map((ep) => ({
          value: ep.id,
          label: ep.name,
        }))}
      />
      <div className="grid overflow-auto ">
        <List>
          {(adj?.steps ?? []).map((fs: MashStepType, index: number) => (
            <MashStep key={fs.id} index={index} src={fs} />
          ))}
        </List>
      </div>
    </Section>
  );
}
