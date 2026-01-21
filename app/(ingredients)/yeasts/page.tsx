import React from "react";
import YeastsTableContainer from "./_components/YeastsTable/YeastsTableContainer";
import YeastsTableToolbar from "./_components/YeastsTable/YeastsTableToolbar";
import { getYeasts } from "./queries";
export async function generateStaticParams() {
  const profiles = await getYeasts();
  return profiles.map(({ slug }) => ({ slug }));
}

export default function YeastsTablePage() {
  return (
    <div>
      <YeastsTableToolbar />
      <YeastsTableContainer />
    </div>
  );
}
