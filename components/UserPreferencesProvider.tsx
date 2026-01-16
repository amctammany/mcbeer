"use client";
import { MaskContext } from "@/contexts/MaskContext";
import {
  UserPreferencesContext,
  UserPreferencesType,
} from "@/contexts/UserPreferencesContext";
import { UserPreferences } from "@/generated/prisma/browser";
import React, { ReactNode } from "react";

export default function UserPreferencesProvider({
  prefs,
  mask,
  children,
}: {
  prefs: UserPreferencesType;
  mask: any;
  children: ReactNode | ReactNode[];
}) {
  return (
    <UserPreferencesContext value={prefs}>
      <MaskContext value={{ mask }}>{children}</MaskContext>
    </UserPreferencesContext>
  );
}
