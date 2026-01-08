import React from "react";
import FermentablesTableContainer from "./_components/FermentablesTable/FermentablesTableContainer";
import FermentablesTableToolbar from "./_components/FermentablesTable/FermentablesTableToolbar";
export default function FermentablesTablePage() {
  return (
    <div>
      <FermentablesTableToolbar />
      <FermentablesTableContainer />
    </div>
  );
}
