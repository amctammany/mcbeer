import React from "react";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import { EquipmentProfileType } from "@/types/Profile";
import Link from "next/link";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import {
  EquipmentProfileForm,
  EquipmentProfileFormContainer,
} from "./EquipmentProfileForm";

export type EquipmentProfileEditorProps = {
  profile: EquipmentProfileType;
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
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Equipment", url: "/equipment" },
          { title: profile.name, url: `/equipment/${profile.slug}` },
        ]}
      >
        <Button type="submit">Save</Button>
      </TopBar>
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
