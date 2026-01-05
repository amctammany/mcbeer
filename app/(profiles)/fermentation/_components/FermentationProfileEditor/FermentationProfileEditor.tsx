import React from "react";
import type {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import {
  FermentationProfileForm,
  FermentationProfileFormContainer,
} from "./FermentationProfileForm";
import FermentationProfileEditorToolbar from "./FermentationProfileEditorToolbar";

export type FermentationProfileEditorProps = {
  profile: AdjustedFermentationProfileType;
  preferences: UserPreferencesType;
  action: any;
};
export function FermentationProfileEditor({
  profile,
  action,
  preferences,
}: FermentationProfileEditorProps) {
  return (
    <FermentationProfileFormContainer
      preferences={preferences}
      profile={profile}
      action={action}
    >
      <FermentationProfileEditorToolbar profile={profile} />
      <h3 className={profile.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/fermentation/${profile.origin?.slug}`}>
          {profile.origin?.name}
        </Link>
      </h3>
      <FermentationProfileForm profile={profile} preferences={preferences} />
    </FermentationProfileFormContainer>
  );
}
export default FermentationProfileEditor;
