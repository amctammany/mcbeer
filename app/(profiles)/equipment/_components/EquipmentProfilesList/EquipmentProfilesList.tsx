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
    <Card className="mx-4 my-2">
      <div className="w-full bg-amber-400">SearchBar</div>
      <ul className="gap-2 *:not-last:border-b-2">
        {profiles.map((profile) => (
          <EquipmentProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </Card>
  );
}
