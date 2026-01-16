import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Yeasts",
  description: "Where to make good beer",
};

export default function YeastsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<div>Yeasts Loading</div>}>{children}</Suspense>;
}
