import React from "react";
import { notFound, unauthorized } from "next/navigation";
import HopEditor from "@/app/(ingredients)/hops/_components/HopEditor/HopEditor";
import { createHop } from "@/app/(ingredients)/hops/actions";
import { getPreferences } from "@/app/admin/queries";
import { AdjustedHopType, HopType } from "@/types/Ingredient";
import { verifySession } from "@/lib/verifySession";

export default async function HopCreatorPage() {
  const session = await verifySession("/hops/new");
  if (!session?.user) unauthorized();
  const prefs = await getPreferences();
  const src = {
    userId: session.user.id,
  } as AdjustedHopType;
  return (
    <HopEditor
      src={src}
      preferences={prefs}
      action={createHop.bind(null, prefs)}
    />
  );
}
