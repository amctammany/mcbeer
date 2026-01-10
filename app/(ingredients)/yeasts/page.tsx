import React from "react";
import YeastsTableContainer from "./_components/YeastsTable/YeastsTableContainer";
import YeastsTableToolbar from "./_components/YeastsTable/YeastsTableToolbar";
export default function YeastsTablePage() {
  return (
    <div>
      <YeastsTableToolbar />
      <YeastsTableContainer />
    </div>
  );
}
