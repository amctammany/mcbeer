import React from "react";
import type {
  AdjustedFermentableType,
  FermentableType,
} from "@/types/Ingredient";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { FermentableForm, FermentableFormContainer } from "./FermentableForm";
import FermentableEditorToolbar from "./FermentableEditorToolbar";

export type FermentableEditorProps = {
  src: AdjustedFermentableType;
  preferences: UserPreferencesType;
  action: any;
};
export function FermentableEditor({
  src,
  action,
  preferences,
}: FermentableEditorProps) {
  return (
    <FermentableFormContainer
      preferences={preferences}
      src={src}
      action={action}
    >
      <FermentableEditorToolbar src={src} />
      <h3 className={src.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/fermentables/${src.origin?.slug}`}>
          {src.origin?.name}
        </Link>
      </h3>
      <div className="max-w-4xl grid  mx-auto">
        <FermentableForm src={src} preferences={preferences} />
      </div>
    </FermentableFormContainer>
  );
}
export default FermentableEditor;
