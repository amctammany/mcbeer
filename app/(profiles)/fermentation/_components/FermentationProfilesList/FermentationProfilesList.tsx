import React from "react";
import FermentationProfileListItem from "./FermentationProfileListItem";
import { Card } from "@/components/ui/card";
import { BaseFermentationProfile } from "@/types/Profile";

export type FermentationProfilesListProps = {
  profiles: BaseFermentationProfile[];
};
export default function FermentationProfilesList({
  profiles,
}: FermentationProfilesListProps) {
  return (
    <div>
      <div className="w-full bg-amber-400">SearchBar</div>
      <ul className="p-2 gap-2 *:*:border-black *:*:border-b-2">
        {profiles.map((profile) => (
          <FermentationProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
