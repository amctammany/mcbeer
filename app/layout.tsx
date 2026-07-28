import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import NavSidebar from "@/components/NavSidebar/NavSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Suspense } from "react";
import { RouteChangeListener } from "@/components/RouteChangeListener";
import UserPreferencesProviderContainer from "@/components/UserPreferencesProviderContainer";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import IngredientProvider from "@/components/IngredientProvider";
import { getFermentables } from "./(ingredients)/fermentables/queries";
import { getHops } from "./(ingredients)/hops/queries";
import { getYeasts } from "./(ingredients)/yeasts/queries";
import { getEquipmentProfiles } from "./(profiles)/equipment/queries";
import { getMashProfiles } from "./(profiles)/mash/queries";
import { getStyles } from "./styles/queries";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="en" className={cn("font-sans", roboto.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <SidebarProvider>
            <Suspense>
              <RouteChangeListener />
            </Suspense>
            <NavSidebar />

            <SidebarInset className="overflow-hiddn relative">
              <UserPreferencesProviderContainer>
                <IngredientProvider
                  stylePromise={getStyles()}
                  equipPromise={getEquipmentProfiles({
                    select: { name: true, id: true },
                  })}
                  mashPromise={getMashProfiles({
                    select: { name: true, id: true },
                  })}
                  hopPromise={getHops({
                    select: { name: true, id: true, alpha: true },
                  })}
                  fermentablePromise={getFermentables({
                    select: {
                      name: true,
                      id: true,
                      color: true,
                      potential: true,
                    },
                  })}
                  yeastPromise={getYeasts({
                    select: { name: true, id: true, attenuation: true },
                  })}
                >
                  {children}
                </IngredientProvider>
              </UserPreferencesProviderContainer>
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
