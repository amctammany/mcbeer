import React from "react";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import {
  EquipmentProfileForm,
  EquipmentProfileFormContainer,
} from "./EquipmentProfileForm";
import EquipmentProfileEditorToolbar from "./EquipmentProfileEditorToolbar";

export type EquipmentProfileEditorProps = {
  profile: AdjustedEquipmentProfileType;
  preferences: UserPreferencesType;
  action: any;
};
export function EquipmentProfileEditor({
  profile,
  action,
  preferences,
}: EquipmentProfileEditorProps) {
  return (
    <EquipmentProfileFormContainer
      preferences={preferences}
      profile={profile}
      action={action}
    >
      <EquipmentProfileEditorToolbar profile={profile} />
      <h3 className={profile.origin ? "" : "hidden"}>
        Forked From:
        <Link href={`/equipment/${profile.origin?.slug}`}>
          {profile.origin?.name}
        </Link>
      </h3>
      <EquipmentProfileForm preferences={preferences} />
    </EquipmentProfileFormContainer>
  );
}
export default EquipmentProfileEditor;
