import React from "react";
import PreferencesForm from "./PreferencesForm";
import PreferencesFormToolbar from "./PreferencesFormToolbar";
import { savePreferences } from "../actions";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { getPreferences } from "../queries";
import { PreferencesMask } from "@/lib/Converter/Masks";
import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
export default async function PreferencesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return unauthorized();
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { UserPreferences: true },
  });
  const prefs = await getPreferences();
  const adjusted = adjustUnits({
    src: user!,
    mask: PreferencesMask,
    prefs,
    inline: true,
    dir: true,
  });
  return (
    <PreferencesForm
      prefs={prefs}
      src={adjusted}
      action={savePreferences.bind(null, prefs)}
    >
      <PreferencesFormToolbar />
    </PreferencesForm>
  );
}
