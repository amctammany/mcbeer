import React from "react";
import { notFound, unauthorized } from "next/navigation";
import MashProfileEditor from "@/app/(profiles)/mash/_components/MashProfileEditor/MashProfileEditor";
import { createMashProfile } from "@/app/(profiles)/mash/actions";
import { getPreferences } from "@/app/admin/queries";
import { AdjustedMashProfileType, MashProfileType } from "@/types/Profile";
import { verifySession } from "@/lib/verifySession";
import { MashProfileMask } from "@/lib/Converter/Masks";
import { adjustUnits } from "@/lib/Converter/adjustUnits";

export default async function MashProfileCreatorPage() {
  const session = await verifySession("/mash/new");
  if (!session?.user) unauthorized();
  const prefs = await getPreferences();
  const profile = {
    userId: session.user.id,
  } as AdjustedMashProfileType;
  const adjusted = adjustUnits({
    src: profile,
    prefs,
    mask: MashProfileMask,
    inline: false,
    dir: true,
  });
  if (!profile) notFound();
  return (
    <MashProfileEditor
      profile={adjusted}
      // preferences={prefs}
      action={createMashProfile}
    />
  );
}
