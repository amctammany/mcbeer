import React from "react";
import { notFound, unauthorized } from "next/navigation";
import MashProfileEditor from "@/app/(profiles)/mash/_components/MashProfileEditor/MashProfileEditor";
import { createMashProfile } from "@/app/(profiles)/mash/actions";
import { getPreferences } from "@/app/admin/queries";
import { MashProfileType } from "@/types/Profile";
import { verifySession } from "@/lib/verifySession";

export default async function MashProfileCreatorPage() {
  const session = await verifySession("/mash/new");
  if (!session?.user) unauthorized();
  const prefs = await getPreferences();
  const profile = {
    userId: session.user.id,
  } as MashProfileType;
  if (!profile) notFound();
  return (
    <MashProfileEditor
      profile={profile}
      // preferences={prefs}
      action={createMashProfile.bind(null, prefs)}
    />
  );
}
