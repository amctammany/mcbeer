"use client";
import React from "react";
import MashProfileListItem from "./MashProfileListItem";
import { Card } from "@/components/ui/card";
import { BaseMashProfile } from "@/types/Profile";
import SearchBox from "@/components/SearchBox";

export type MashProfilesListProps = {
  profiles: BaseMashProfile[];
};
export default function MashProfilesList({ profiles }: MashProfilesListProps) {
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
          placeholder="Search mash profiles..."
          label="Search"
        />
      </div>
      <ul className="p-2 gap-2 *:*:border-black *:*:border-b-2">
        {filteredProfiles.map((profile) => (
          <MashProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
