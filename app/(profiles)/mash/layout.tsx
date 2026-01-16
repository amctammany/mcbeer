"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { MashProfileMask } from "@/lib/Converter/Masks";
import { Suspense } from "react";
export default function MashProfilesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaskContext value={{ mask: MashProfileMask }}>{children}</MaskContext>
    // <Suspense fallback={<div>Mash Profiles Loading</div>}>
    // </Suspense>
  );
}
