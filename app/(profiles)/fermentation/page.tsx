"use cache";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import { getFermentationProfiles } from "./queries";
import { BaseFermentationProfile } from "@/types/Profile";
import IconButton from "@/components/Button/IconButton";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import FermentationProfilesList from "./_components/FermentationProfilesList/FermentationProfilesList";
export async function generateStaticParams() {
  const profiles = await getFermentationProfiles();
  return profiles.map(({ slug }) => ({ slug }));
}
export const metadata: Metadata = {
  title: "Fermentation Profiles",
  description: "List of fermentation profiles",
};
export default async function FermentationProfilesListPage() {
  const profiles = await getFermentationProfiles();
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Fermentation", url: "/fermentation" },
        ]}
      >
        <IconButton icon={Plus} variant="outline" href="/fermentation/new">
          Add
        </IconButton>
      </TopBar>
      <FermentationProfilesList
        profiles={profiles as BaseFermentationProfile[]}
      />
    </div>
  );
}
