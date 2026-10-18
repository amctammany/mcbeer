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
        <Field className="flex h-12 text-lg w-full rounded-md  bg-transparent px-3 py-1 textbase transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden invalid:ring-destructive disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ">
          <InputGroup className="px-4 py-2 h-12">
            <InputGroupInput
              type="search"
              value={filterValue}
              id="input-group-url"
              className="text-xl! h-12"
              placeholder="Search"
              onChange={onChange}
            />
            <InputGroupAddon className="siz-4">
              <SearchIcon className="sie-4" width="44" height={44} />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <XCircleIcon size={48} />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
      <ul className="p-2 gap-2 border-t-4 *:*:border-black *:*:border-b-2">
        {filteredProfiles.map((profile) => (
          <EquipmentProfileListItem key={profile.name} profile={profile} />
        ))}
      </ul>
    </div>
  );
}
