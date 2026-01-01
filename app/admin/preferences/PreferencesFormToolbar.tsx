import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";

export default function PreferencesFormToolbar() {
  return (
    <TopBar breadcrumbs={[{ title: "preferences" }]}>
      <button type="submit">Save</button>
    </TopBar>
  );
}
