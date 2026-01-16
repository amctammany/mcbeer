import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Mash Profiles",
  description: "Where to make good beer",
};

export default function MashProfilesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Mash Profiles Loading</div>}>{children}</Suspense>
  );
}
