import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer",
  description: "Where to make good beer",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<div>Auth Loading</div>}>{children}</Suspense>;
}
