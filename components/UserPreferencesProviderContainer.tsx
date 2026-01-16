import { getPreferences } from "@/app/admin/queries";
import React, { Suspense } from "react";
import UserPreferencesProvider from "./UserPreferencesProvider";

export default async function UserPreferencesProviderContainer({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const prefs = getPreferences();
  return (
    <Suspense fallback={children}>
      <UserPreferencesProvider prefs={prefs}>
        {children}
      </UserPreferencesProvider>
    </Suspense>
  );
}
