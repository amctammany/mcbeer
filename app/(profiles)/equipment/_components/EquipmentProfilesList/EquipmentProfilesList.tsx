import React from "react";
import EquipmentProfileListItem from "./EquipmentProfileListItem";
import { Card } from "@/components/ui/card";
import { BaseEquipmentProfile } from "@/types/Profile";

export type EquipmentProfilesListProps = {
  profiles: BaseEquipmentProfile[];
};
export default function EquipmentProfilesList({
  profiles,
}: EquipmentProfilesListProps) {
  return (
    <div>
      <div className="w-full bg-amber-400">SearchBar</div>
      <ul className="p-2 gap-2 *:*:border-black *:*:border-b-2">
        {profiles.map((profile) => (
          <EquipmentProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
