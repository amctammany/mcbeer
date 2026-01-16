import React from "react";
import type { WaterProfileType } from "@/types/Profile";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import {
  WaterProfileForm,
  WaterProfileFormContainer,
} from "./WaterProfileForm";
import WaterProfileEditorToolbar from "./WaterProfileEditorToolbar";

export type WaterProfileEditorProps = {
  profile: WaterProfileType;
  // preferences: UserPreferencesType;
  action: any;
};
export function WaterProfileEditor({
  profile,
  action,
}: // preferences,
WaterProfileEditorProps) {
  return (
    <WaterProfileFormContainer
      // preferences={preferences}
      profile={profile}
      action={action}
    >
      <WaterProfileEditorToolbar profile={profile} />
      <h3 className={profile.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/water/${profile.origin?.slug}`}>
          {profile.origin?.name}
        </Link>
      </h3>
      <WaterProfileForm />
    </WaterProfileFormContainer>
  );
}
export default WaterProfileEditor;
