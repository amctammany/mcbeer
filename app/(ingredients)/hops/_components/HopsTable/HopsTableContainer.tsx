import { getHops } from "@/app/(ingredients)/hops/queries";

import React, { Suspense } from "react";
import HopsTable, { HopsTableSkeleton } from "./HopsTable";

export default async function HopsTableContainer() {
  const hops = getHops();

  return (
    <Suspense fallback={<HopsTableSkeleton />}>
      <HopsTable src={hops} />
    </Suspense>
  );
}
