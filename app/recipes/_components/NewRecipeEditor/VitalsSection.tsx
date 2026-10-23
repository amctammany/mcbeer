"use client";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { calculateVitals } from "@/lib/calculators/gravityCalculator";
import { RecipeType } from "@/types/Recipe";
import React, { Usable, use } from "react";

export default function VitalsSection({ src }: { src: any }) {
  const vitals = calculateVitals(src);
  console.log(vitals);
  return (
    <Section title="Vitals">
      <Prop label="OG" value={vitals.OG} variant="inline" />
      <Prop label="SRM" value={vitals.SRM} variant="inline" />
      <Prop label="IBU" value={vitals.IBUs} variant="inline" />
      <Prop label="FG" value={vitals.FG} variant="inline" />
      <Prop label="ABV" value={vitals.ABV} variant="inline" />
    </Section>
  );
}
