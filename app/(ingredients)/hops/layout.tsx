import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Hops",
  description: "Where to make good beer",
};

export default function HopsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<div>Hops Loading</div>}>{children}</Suspense>;
}
