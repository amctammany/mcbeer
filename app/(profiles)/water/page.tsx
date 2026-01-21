"use cache";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import { getWaterProfiles } from "./queries";
import { BaseWaterProfile } from "@/types/Profile";
import IconButton from "@/components/Button/IconButton";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import WaterProfilesList from "./_components/WaterProfilesList/WaterProfilesList";
export async function generateStaticParams() {
  const profiles = await getWaterProfiles();
  return profiles.map(({ slug }) => ({ slug }));
}

export const metadata: Metadata = {
  title: "Water Profiles",
  description: "List of water profiles",
};
export default async function WaterProfilesListPage() {
  const profiles = await getWaterProfiles();
  return (
    <div>
      <TopBar
        breadcrumbs={[{ title: "Profiles" }, { title: "Water", url: "/water" }]}
      >
        <IconButton icon={Plus} variant="outline" href="/water/new">
          Add
        </IconButton>
      </TopBar>
      <WaterProfilesList profiles={profiles as BaseWaterProfile[]} />
    </div>
  );
}
