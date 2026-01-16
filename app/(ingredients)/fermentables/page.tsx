import React from "react";
import FermentablesTableContainer from "./_components/FermentablesTable/FermentablesTableContainer";
import FermentablesTableToolbar from "./_components/FermentablesTable/FermentablesTableToolbar";
import { cacheLife } from "next/cache";
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
