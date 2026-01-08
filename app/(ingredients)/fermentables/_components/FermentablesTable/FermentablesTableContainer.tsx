import { getFermentables } from "@/app/(ingredients)/fermentables/queries";

import React, { Suspense } from "react";
import FermentablesTable, {
  FermentablesTableSkeleton,
} from "./FermentablesTable";

export default async function FermentablesTableContainer() {
  const fermentables = getFermentables();

  return (
    <Suspense fallback={<FermentablesTableSkeleton />}>
      <FermentablesTable src={fermentables} />
    </Suspense>
  );
}
