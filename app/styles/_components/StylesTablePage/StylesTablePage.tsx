import type { Style } from "@prisma/client";
import React from "react";
import StylesTable from "../StylesTable";
import { TopBar } from "@/components/TopBar/TopBar";
export type StylesTablePageProps = {
  styles: Style[];
};
export default function StylesTablePage({ styles }: StylesTablePageProps) {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Styles", isCurrent: true }]} />

      <StylesTable src={styles} />
    </div>
  );
}
