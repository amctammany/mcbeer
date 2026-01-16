"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
import { Suspense } from "react";

export default function FermentationProfilesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaskContext value={{ mask: FermentationProfileMask }}>
      {children}
    </MaskContext>
    // <Suspense fallback={<div>Fermentation Profiles Loading</div>}>
    // </Suspense>
  );
}
