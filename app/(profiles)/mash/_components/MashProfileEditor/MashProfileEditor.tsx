import React from "react";
import type { MashProfileType } from "@/types/Profile";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { MashProfileForm, MashProfileFormContainer } from "./MashProfileForm";
import MashProfileEditorToolbar from "./MashProfileEditorToolbar";

export type MashProfileEditorProps = {
  profile: MashProfileType;
  preferences: UserPreferencesType;
  action: any;
};
export function MashProfileEditor({
  profile,
  action,
  preferences,
}: MashProfileEditorProps) {
  return (
    <MashProfileFormContainer
      preferences={preferences}
      profile={profile}
      action={action}
    >
      <MashProfileEditorToolbar profile={profile} />
      <h3 className={profile.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/mash/${profile.origin?.slug}`}>
          {profile.origin?.name}
        </Link>
      </h3>
      <MashProfileForm profile={profile} preferences={preferences} />
    </MashProfileFormContainer>
  );
}
export default MashProfileEditor;
