"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { RecipeMask } from "@/lib/Converter/Masks";

export default function RecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MaskContext value={{ mask: RecipeMask }}>{children}</MaskContext>;
}
