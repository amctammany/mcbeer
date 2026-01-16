"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { YeastMask } from "@/lib/Converter/Masks";
export default function YeastsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaskContext value={{ mask: YeastMask }}>{children}</MaskContext>
    // <Suspense fallback={<div>Yeasts Loading</div>}>
    // </Suspense>
  );
}
