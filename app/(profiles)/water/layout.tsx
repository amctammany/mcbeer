import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Water Profiles",
  description: "Where to make good beer",
};

export default function WaterProfilesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={children}>{children}</Suspense>;
}
