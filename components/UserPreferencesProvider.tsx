"use client";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/browser";
import React, { ReactNode, use } from "react";

export default function UserPreferencesProvider({
  prefs,
  children,
}: {
  prefs: Promise<UserPreferencesType>;
  children: ReactNode | ReactNode[];
}) {
  const preferences = use(prefs);
  return (
    <UserPreferencesContext value={preferences}>
      {children}
    </UserPreferencesContext>
  );
}
