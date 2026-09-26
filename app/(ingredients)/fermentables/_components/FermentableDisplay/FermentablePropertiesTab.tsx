import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { AdjustedFermentableType, FermentableType } from "@/types/Ingredient";
import React from "react";

export type FermentablePropertiesTabProps = {
  src?: Partial<AdjustedFermentableType>;
};
export default function FermentablePropertiesTab({
  src = {},
}: FermentablePropertiesTabProps) {
  return (
    <div className="grid lg:grid-cols-1 ">
      <Section title="Properties">
        <AmountProp
          name="color"
          label="Color"
          variant={"inline"}
          value={src.color}
        />
        <AmountProp
          name="power"
          label="Power"
          variant={"inline"}
          value={src.power}
        />
        <AmountProp
          name="potential"
          precision={4}
          label="Potential"
          value={src.potential}
          variant={"inline"}
        />
        <AmountProp
          name="yield"
          label="Yield"
          variant={"inline"}
          value={src.yield}
        />
        <AmountProp
          name="protein"
          label="Protein"
          variant={"inline"}
          value={src.protein}
        />
        <AmountProp
          name="friability"
          label="Friability"
          variant="inline"
          value={src.friability}
        />
        <AmountProp
          name="coarseFineDiff"
          label="Coarse Fine Diff"
          variant="inline"
          value={src.coarseFineDiff}
        />
        <AmountProp
          name="moisture"
          label="Moisture"
          value={src.moisture}
          variant={"inline"}
        />
        <AmountProp
          name="maxUsage"
          label="Max Usage"
          precision={2}
          value={src.maxUsage}
          variant={"inline"}
        />
      </Section>
    </div>
  );
}
