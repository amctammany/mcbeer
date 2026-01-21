"use cache";
import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";
import { getMashProfiles } from "./queries";
import { BaseMashProfile } from "@/types/Profile";
import IconButton from "@/components/Button/IconButton";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import MashProfilesList from "./_components/MashProfilesList/MashProfilesList";
export async function generateStaticParams() {
  const profiles = await getMashProfiles();
  return profiles.map(({ slug }) => ({ slug }));
}

export const metadata: Metadata = {
  title: "Mash Profiles",
  description: "List of mash profiles",
};
export default async function MashProfilesListPage() {
  const profiles = await getMashProfiles();
  return (
    <div>
      <TopBar
        breadcrumbs={[{ title: "Profiles" }, { title: "Mash", url: "/mash" }]}
      >
        <IconButton icon={Plus} variant="outline" href="/mash/new">
          Add
        </IconButton>
      </TopBar>
      <MashProfilesList profiles={profiles as BaseMashProfile[]} />
    </div>
  );
}
