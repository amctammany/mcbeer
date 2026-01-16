import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Equipment Profiles",
  description: "Where to make good beer",
};

export default function EquipmentProfilesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Equipment Profiles Loading</div>}>
      {children}
    </Suspense>
  );
}
