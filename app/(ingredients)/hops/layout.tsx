"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { HopMask } from "@/lib/Converter/Masks";
import { Suspense } from "react";

const mask = { mask: HopMask };
export default function HopsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MaskContext value={mask}>{children}</MaskContext>;
  // <Suspense fallback={<div>Hops Loading</div>}>
  // </Suspense>
}
