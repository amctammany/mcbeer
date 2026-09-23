"use client";
import IconButton from "@/components/Button/IconButton";
import List from "@/components/Form/List/List";
import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemDescription from "@/components/Form/List/ListItemDescription";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemMenu from "@/components/Form/List/ListItemMenu";
import { TextField } from "@/components/Form/TextField";
import Section from "@/components/Section";
import { AdjustedHopType, HopInputType } from "@/types/Ingredient";
import { HopIcon, PlusIcon, XIcon } from "lucide-react";
import React, { MouseEventHandler } from "react";
import {
  useFieldArray,
  UseFieldArrayAppend,
  useFormContext,
} from "react-hook-form";

export type SubstitutesSectionToolbarProps = {
  append?: UseFieldArrayAppend<HopInputType>;
};
export function SubstitutesSectionToolbar({
  append,
}: SubstitutesSectionToolbarProps) {
  const handleAdd = () => {
    append?.({ text: "" });
  };
  return (
    <div className="flex items-center lg:gap-2 px-1 lg:px-4">
      <IconButton
        id="substituteString"
        icon={PlusIcon}
        label="Add"
        onClick={handleAdd}
      />
    </div>
  );
}

export default function SubstitutesSection() {
  const { register, control } = useFormContext<HopInputType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "substitutesString",
  });
  const handleRemove: MouseEventHandler<any> = (e) => {
    const index = e.currentTarget.dataset.index;
    console.log(index);
  };
  return (
    <Section
      title="Substitutes"
      actions={<SubstitutesSectionToolbar append={append} />}
    >
      <List>
        {fields.map((f, index) => (
          <ListItem key={index} size="xs" className="">
            <ListItemIcon>
              <HopIcon />
            </ListItemIcon>
            <ListItemContent>
              <ListItemDescription className="grow">
                <TextField
                  {...register(`substitutesString.${index}.text` as const)}
                />
              </ListItemDescription>
            </ListItemContent>
            <ListItemMenu>
              <IconButton
                icon={XIcon}
                onClick={handleRemove}
                data-index={index}
              />
            </ListItemMenu>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
