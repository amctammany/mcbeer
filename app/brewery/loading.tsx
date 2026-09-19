import { TopBar } from "@/components/TopBar/TopBar";
import React from "react";

export default function Loading() {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Brewery" }]}></TopBar>
      <h3>Loading</h3>
    </div>
  );
}
