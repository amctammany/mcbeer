import { getFermentables } from "@/app/(ingredients)/fermentables/queries";

import React, { Suspense } from "react";
import FermentablesTable from "./FermentablesTable";
import { cacheLife, cacheTag } from "next/cache";
import { FermentablesTableSkeleton } from "./FermentableTableSkeleton";

export default async function FermentablesTableContainer() {
  "use cache";
  cacheLife("hours");
  cacheTag("fermentables");
  const fermentables = getFermentables();

  return (
    <Suspense fallback={<FermentablesTableSkeleton />}>
      <FermentablesTable src={fermentables} />
    </Suspense>
  );
}
