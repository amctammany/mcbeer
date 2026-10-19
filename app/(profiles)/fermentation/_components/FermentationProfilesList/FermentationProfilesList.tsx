"use client";
import React from "react";
import FermentationProfileListItem from "./FermentationProfileListItem";
import { Card } from "@/components/ui/card";
import { BaseFermentationProfile } from "@/types/Profile";
import SearchBox from "@/components/SearchBox";

export type FermentationProfilesListProps = {
  profiles: BaseFermentationProfile[];
};
export default function FermentationProfilesList({
  profiles,
}: FermentationProfilesListProps) {
  const [filterValue, setFilterValue] = React.useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("Filter value:", e.target.value);
    setFilterValue(e.target.value);
    // Implement filtering logic here
  };
  const filteredProfiles = profiles.filter((profile) =>
    profile.name?.toLowerCase().includes(filterValue.toLowerCase()),
  );

  return (
    <div>
      <div className="mb-4 w-full h-12 m-2">
        <SearchBox
          value={filterValue}
          onChange={onChange}
          placeholder="Search fermentation profiles..."
          label="Search"
        />
      </div>
      <div className="w-full bg-amber-400">SearchBar</div>
      <ul className="p-2 gap-2 *:*:border-black *:*:border-b-2">
        {filteredProfiles.map((profile) => (
          <FermentationProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
