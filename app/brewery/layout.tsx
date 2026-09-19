import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Brewery",
  description: "Brewery StartPage",
};

export default function BreweryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<div>Brewery Loading</div>}>{children}</Suspense>;
}
