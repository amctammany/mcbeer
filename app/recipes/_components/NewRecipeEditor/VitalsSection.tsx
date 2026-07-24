"use client";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { RecipeType } from "@/types/Recipe";
import React, { Usable, use } from "react";

export default function VitalsSection({}: {}) {
  return (
    <Section title="Vitals">
      <Prop label="OG" value="?" variant="inline" />
      <Prop label="SRM" value="?" variant="inline" />
      <Prop label="IBU" value="?" variant="inline" />
      <Prop label="FG" value="?" variant="inline" />
      <Prop label="ABV" value="?" variant="inline" />
    </Section>
  );
}
