import React from "react";
import { notFound, unauthorized } from "next/navigation";
import FermentableEditor from "@/app/(ingredients)/fermentables/_components/FermentableEditor/FermentableEditor";
import { createFermentable } from "@/app/(ingredients)/fermentables/actions";
import { getPreferences } from "@/app/admin/queries";
import { AdjustedFermentableType, FermentableType } from "@/types/Ingredient";
import { verifySession } from "@/lib/verifySession";
import { getCountries } from "../../queries";

export default async function FermentableCreatorPage() {
  const session = await verifySession("/fermentables/new");
  if (!session?.user) unauthorized();
  // const prefs = await getPreferences();
  const countries = await getCountries();
  const src = {
    userId: session.user.id,
  } as FermentableType;
  return (
    <FermentableEditor
      countries={countries}
      src={src}
      // preferences={prefs}
      action={createFermentable}
    />
  );
}
