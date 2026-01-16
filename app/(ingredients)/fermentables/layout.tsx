import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer",
  description: "Where to make good beer",
};

export default function FermentablesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Fermentables Loading</div>}>{children}</Suspense>
  );
}
