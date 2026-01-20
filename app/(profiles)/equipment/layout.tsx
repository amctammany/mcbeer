"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import { Suspense } from "react";

export default function EquipmentProfilesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaskContext value={{ mask: EquipmentProfileMask }}>{children}</MaskContext>
  );
}
