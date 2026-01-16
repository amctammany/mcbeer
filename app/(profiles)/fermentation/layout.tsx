import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Fermentation Profiles",
  description: "Where to make good beer",
};

export default function FermentationProfilesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Fermentation Profiles Loading</div>}>
      {children}
    </Suspense>
  );
}
