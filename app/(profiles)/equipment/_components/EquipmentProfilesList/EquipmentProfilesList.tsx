"use client";
import React from "react";
import EquipmentProfileListItem from "./EquipmentProfileListItem";
import { Card } from "@/components/ui/card";
import {
  AdjustedEquipmentProfileType,
  BaseEquipmentProfile,
} from "@/types/Profile";
import FilterInput from "@/components/DataTable/FilterInput";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { SearchIcon, XCircleIcon } from "lucide-react";
import SearchBox from "@/components/SearchBox";
export type EquipmentProfilesListProps = {
  profiles: BaseEquipmentProfile[];
};
export default function EquipmentProfilesList({
  profiles,
}: EquipmentProfilesListProps) {
  const [filterValue, setFilterValue] = React.useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("Filter value:", e.target.value);
    setFilterValue(e.target.value);
    // Implement filtering logic here
  };
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(filterValue.toLowerCase()),
  );
  return (
    <div className="">
      <div className="mb-4 w-full h-12 m-2">
        <SearchBox
          value={filterValue}
          onChange={onChange}
          placeholder="Search equipment..."
          label="Search"
        />
      </div>
      <ul className="p-2 gap-2 border-t-4 *:*:border-black *:*:border-b-2">
        {filteredProfiles.map((profile) => (
          <EquipmentProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
