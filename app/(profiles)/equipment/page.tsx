"use cache";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import { getEquipmentProfiles } from "./queries";
import EquipmentProfilesList from "./_components/EquipmentProfilesList/EquipmentProfilesList";
import { BaseEquipmentProfile } from "@/types/Profile";
import IconButton from "@/components/Button/IconButton";
import { Plus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Profiles",
  description: "List of equipment profiles",
};
export default async function EquipmentProfilesListPage() {
  const profiles = await getEquipmentProfiles();
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Equipment", url: "/equipment" },
        ]}
      >
        <IconButton icon={Plus} variant="outline" href="/equipment/new">
          Add
        </IconButton>
      </TopBar>
      <EquipmentProfilesList profiles={profiles as BaseEquipmentProfile[]} />
    </div>
  );
}
