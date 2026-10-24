"use client";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { calculateVitals } from "@/lib/calculators/gravityCalculator";
import { ExtendedRecipeType, RecipeType } from "@/types/Recipe";
import React, { Usable, use } from "react";

import { Range } from "@/components/Range";
import WhiskerBarPlot from "@/components/WhiskerBarPlot";
export default function VitalsSection({ src }: { src: ExtendedRecipeType }) {
  const vitals = calculateVitals(src);
  const ranges: Record<keyof Omit<typeof vitals, "IBUMap">, [number, number]> =
    {
      OG: [src.style?.ogLow ?? 0, src.style?.ogHigh ?? 0],
      FG: [src.style?.fgLow ?? 0, src.style?.fgHigh ?? 0],
      ABV: [src.style?.abvLow ?? 0, src.style?.abvHigh ?? 0],
      SRM: [src.style?.srmLow ?? 0, src.style?.srmHigh ?? 0],
      IBUs: [src.style?.ibuLow ?? 0, src.style?.ibuHigh ?? 0],
    };

  //   const ranges = ["OG"].reduce((acc, k) => {
  // const names = k.toLocaleLowerCase();
  // const range = [src.style?.ogLow, src.style?.ogHigh];
  // acc[k] = vitals[k as keyof typeof vitals];
  // return acc;
  //   }, {} as any);
  console.log({ vitals, ranges });
  return (
    <Section title="Vitals">
      <div>
        <Range
          label="OG"
          range={ranges.OG}
          value={vitals.OG}
          min={1}
          max={1.1}
        />
      </div>
      <WhiskerBarPlot
        label="OG"
        range={ranges.OG}
        value={vitals.OG}
        // min={1}
        // max={1.2}
      />
      <WhiskerBarPlot
        label="FG"
        range={ranges.FG}
        value={vitals.FG}
        // min={1}
        // max={1.2}
      />

      <Prop label="OG" value={vitals.OG} variant="inline" />
      <Prop label="SRM" value={vitals.SRM} variant="inline" />
      <Prop label="IBU" value={vitals.IBUs} variant="inline" />
      <Prop label="FG" value={vitals.FG} variant="inline" />
      <Prop label="ABV" value={vitals.ABV} variant="inline" />
    </Section>
  );
}
