import React from "react";
import type { MashProfileType } from "@/types/Profile";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { MashProfileForm, MashProfileFormContainer } from "./MashProfileForm";
import MashProfileEditorToolbar from "./MashProfileEditorToolbar";

export type MashProfileEditorProps = {
  profile: AdjustedMashProfileType;
  // preferences: UserPreferencesType;
  action: any;
};
export function MashProfileEditor({
  profile,
  action,
}: // preferences,
MashProfileEditorProps) {
  return (
    <MashProfileFormContainer profile={profile} action={action}>
      <MashProfileEditorToolbar profile={profile} />
      <h3 className={profile.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/mash/${profile.origin?.slug}`}>
          {profile.origin?.name}
        </Link>
      </h3>
      <div className="max-w-2xl grid  mx-auto">
        <MashProfileForm profile={profile} />
      </div>
    </MashProfileFormContainer>
  );
}
export default MashProfileEditor;
