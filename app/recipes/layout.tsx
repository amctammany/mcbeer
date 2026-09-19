"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { BreweryMask } from "@/lib/Converter/Masks";

export default function RecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MaskContext value={{ mask: BreweryMask }}>{children}</MaskContext>;
}
