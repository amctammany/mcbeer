import React from "react";
import type { AdjustedHopType, HopType } from "@/types/Ingredient";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { HopForm, HopFormContainer } from "./HopForm";
import HopEditorToolbar from "./HopEditorToolbar";

export type HopEditorProps = {
  src: AdjustedHopType;
  preferences: UserPreferencesType;
  countries: string[];
  action: any;
};
export function HopEditor({
  src,
  action,
  preferences,
  countries,
}: HopEditorProps) {
  return (
    <HopFormContainer preferences={preferences} src={src} action={action}>
      <HopEditorToolbar src={src} />
      <h3 className={src.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/hops/${src.origin?.slug}`}>{src.origin?.name}</Link>
      </h3>
      <div className="max-w-4xl grid  mx-auto">
        <HopForm src={src} preferences={preferences} countries={countries} />
      </div>
    </HopFormContainer>
  );
}
export default HopEditor;
