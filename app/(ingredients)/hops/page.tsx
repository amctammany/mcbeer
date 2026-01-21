import React from "react";
import HopsTableContainer from "./_components/HopsTable/HopsTableContainer";
import HopsTableToolbar from "./_components/HopsTable/HopsTableToolbar";
import { getHops } from "./queries";
export async function generateStaticParams() {
  const profiles = await getHops();
  return profiles.map(({ slug }) => ({ slug }));
}

export default function HopsTablePage() {
  return (
    <div>
      <HopsTableToolbar />
      <HopsTableContainer />
    </div>
  );
}
