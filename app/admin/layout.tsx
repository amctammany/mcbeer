import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "McBeer: Admin",
  description: "Where to make good beer",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<div>Admin Loading</div>}>{children}</Suspense>;
}
