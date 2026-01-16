import React from "react";
import type { AdjustedHopType, HopType } from "@/types/Ingredient";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { HopForm, HopFormContainer } from "./HopForm";
import HopEditorToolbar from "./HopEditorToolbar";

export type HopEditorProps = {
  src: HopType;
  // preferences: UserPreferencesType;
  countries: string[];
  action: any;
};
export function HopEditor({
  src,
  action,
  // preferences,
  countries,
}: HopEditorProps) {
  return (
    <HopFormContainer src={src} action={action}>
      <HopEditorToolbar src={src} />
      <h3 className={src.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/hops/${src.origin?.slug}`}>{src.origin?.name}</Link>
      </h3>
      <HopForm src={src} countries={countries} />
    </HopFormContainer>
  );
}
export default HopEditor;
