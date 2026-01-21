import React from "react";
import FermentablesTableContainer from "./_components/FermentablesTable/FermentablesTableContainer";
import FermentablesTableToolbar from "./_components/FermentablesTable/FermentablesTableToolbar";
import { cacheLife } from "next/cache";
import { getFermentables } from "./queries";
export async function generateStaticParams() {
  const profiles = await getFermentables();
  return profiles.map(({ slug }) => ({ slug }));
}

export default async function FermentablesTablePage() {
  "use cache";
  cacheLife("max");
  return (
    <div>
      <FermentablesTableToolbar />
      <FermentablesTableContainer />
    </div>
  );
}
