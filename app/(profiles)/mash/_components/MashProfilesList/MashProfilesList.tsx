import React from "react";
import MashProfileListItem from "./MashProfileListItem";
import { Card } from "@/components/ui/card";
import { BaseMashProfile } from "@/types/Profile";

export type MashProfilesListProps = {
  profiles: BaseMashProfile[];
};
export default function MashProfilesList({ profiles }: MashProfilesListProps) {
  return (
    <div>
      <div className="w-full bg-amber-400">SearchBar</div>
      <ul className="p-2 gap-2 *:*:border-black *:*:border-b-2">
        {profiles.map((profile) => (
          <MashProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
