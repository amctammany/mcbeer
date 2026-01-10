import React from "react";
import { notFound, unauthorized } from "next/navigation";
import YeastEditor from "@/app/(ingredients)/yeasts/_components/YeastEditor/YeastEditor";
import { createYeast } from "@/app/(ingredients)/yeasts/actions";
import { getPreferences } from "@/app/admin/queries";
import { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import { verifySession } from "@/lib/verifySession";
import { getCountries } from "../../queries";

export default async function YeastCreatorPage() {
  const session = await verifySession("/yeasts/new");
  if (!session?.user) unauthorized();
  const prefs = await getPreferences();
  const countries = await getCountries();
  const src = {
    userId: session.user.id,
  } as AdjustedYeastType;
  return (
    <YeastEditor
      countries={countries}
      src={src}
      preferences={prefs}
      action={createYeast.bind(null, prefs)}
    />
  );
}
