import React from "react";
import type { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { YeastForm, YeastFormContainer } from "./YeastForm";
import YeastEditorToolbar from "./YeastEditorToolbar";

export type YeastEditorProps = {
  src: AdjustedYeastType;
  preferences: UserPreferencesType;
  countries: string[];
  action: any;
};
export function YeastEditor({
  src,
  action,
  preferences,
  countries,
}: YeastEditorProps) {
  return (
    <YeastFormContainer preferences={preferences} src={src} action={action}>
      <YeastEditorToolbar src={src} />
      <h3 className={src.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/yeasts/${src.origin?.slug}`}>{src.origin?.name}</Link>
      </h3>
      <YeastForm src={src} preferences={preferences} countries={countries} />
    </YeastFormContainer>
  );
}
export default YeastEditor;
