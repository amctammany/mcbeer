import List from "@/components/Form/List/List";
import ListItem from "@/components/Form/List/ListItem";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import type { AdjustedHopType, HopType } from "@/types/Ingredient";
import React from "react";
import HopSubstituteListItem from "./HopSubstituteListItem";
import { Label } from "@/components/Form/Label";

export type HopDetailsTabProps = {
  src: AdjustedHopType;
};
export default function HopDetailsTab({ src }: HopDetailsTabProps) {
  return (
    <Section title="Details" className="block lg:grid-cols-1 ">
      <Prop variant="inline" label="Name" value={src.name} />
      <Prop variant="inline" label="Description" value={src.description} />
      <Prop variant="inline" label="Country" value={src.country} />
      <Prop label="Usage" variant="inline" value={src.usage} />
      <Prop label="Characteristics" value={src.characteristics} />
      <Label label="Substitutes">
        <List>
          {src.substitutesString.map((sub) => (
            <HopSubstituteListItem key={sub} src={sub} />
          ))}
        </List>
      </Label>
    </Section>
  );
}
