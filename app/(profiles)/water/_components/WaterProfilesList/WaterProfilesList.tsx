import React from "react";
import WaterProfileListItem from "./WaterProfileListItem";
import { Card } from "@/components/ui/card";
import { BaseWaterProfile } from "@/types/Profile";

export type WaterProfilesListProps = {
  profiles: BaseWaterProfile[];
};
export default function WaterProfilesList({
  profiles,
}: WaterProfilesListProps) {
  return (
    <div>
      <div className="w-full bg-amber-400">SearchBar</div>
      <ul className="p-2 gap-2 *:*:border-black *:*:border-b-2">
        {profiles.map((profile) => (
          <WaterProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
