import { getYeasts } from "@/app/(ingredients)/yeasts/queries";

import React, { Suspense } from "react";
import YeastsTable, { YeastsTableSkeleton } from "./YeastsTable";

export default async function YeastsTableContainer() {
  "use cache";
  const yeasts = getYeasts();

  return (
    <Suspense fallback={<YeastsTableSkeleton />}>
      <YeastsTable src={yeasts} />
    </Suspense>
  );
}
