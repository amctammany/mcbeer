import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { AdjustedRecipeType } from "@/types/Recipe";
import React from "react";

export type WaterSectionProps = {
  src: AdjustedRecipeType;
};
export default function WaterSection({ src }: WaterSectionProps) {
  return (
    <Section title="Water">
      <Prop label="Water Profile" value={src.WaterProfile?.name} />
      <div className="grid grid-cols-3 gap-2">
        <AmountProp label="Ca" value={src.WaterProfile?.calcium} unit="ppm" />
        <AmountProp label="Mg" value={src.WaterProfile?.magnesium} unit="ppm" />
        <AmountProp label="Na" value={src.WaterProfile?.sodium} unit="ppm" />
        <AmountProp
          label="HCO3"
          value={src.WaterProfile?.bicarbonate}
          unit="ppm"
        />
        <AmountProp label="Cl" value={src.WaterProfile?.chloride} unit="ppm" />
        <AmountProp label="SO4" value={src.WaterProfile?.sulfate} unit="ppm" />
      </div>
    </Section>
  );
}
