import React from "react";
import HopsTableContainer from "./_components/HopsTable/HopsTableContainer";
import HopsTableToolbar from "./_components/HopsTable/HopsTableToolbar";
export default function HopsTablePage() {
  return (
    <div>
      <HopsTableToolbar />
      <HopsTableContainer />
    </div>
  );
}
