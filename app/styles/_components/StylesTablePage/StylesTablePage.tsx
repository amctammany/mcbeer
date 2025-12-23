import React from "react";
import StylesTable from "../StylesTable";
import { TopBar } from "@/components/TopBar/TopBar";
import { Style } from "@/generated/prisma/client";
export type StylesTablePageProps = {
  styles: Style[];
};
export default function StylesTablePage({ styles }: StylesTablePageProps) {
  console.log(styles.length);
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Styles", isCurrent: true }]} />

      <StylesTable src={styles} />
    </div>
  );
}
