"use client";
import { MaskContext, MaskType } from "@/contexts/MaskContext";
import { FermentableMask } from "@/lib/Converter/Masks";
import { Metadata } from "next";
import { Suspense } from "react";

export default function FermentableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaskContext value={{ mask: FermentableMask }}>{children}</MaskContext>
  );
}
