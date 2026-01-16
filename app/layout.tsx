import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavSidebar from "@/components/NavSidebar/NavSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Suspense } from "react";
import { RouteChangeListener } from "@/components/RouteChangeListener";
import UserPreferencesProvider from "@/components/UserPreferencesProvider";
import { getPreferences } from "./admin/queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "McBeer",
  description: "Where to make good beer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <Suspense fallback={<div>Loading RouteChangeListener...</div>}>
            <RouteChangeListener />
          </Suspense>
          <NavSidebar />

          <SidebarInset className="overflow-hiddn relative">
            <Suspense>
              <UserPreferencesProvider prefs={getPreferences()}>
                {children}
              </UserPreferencesProvider>
            </Suspense>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
