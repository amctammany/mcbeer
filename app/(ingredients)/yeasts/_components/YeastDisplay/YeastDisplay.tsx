import type { AdjustedYeastType, YeastType } from "@/types/Ingredient";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import type { UserPreferencesType } from "@/types/User";
import Card from "@/components/Card";
import YeastDetailsTab from "./YeastDetailsTab";
import YeastPropertiesTab from "./YeastPropertiesTab";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
export type YeastDisplayProps = {
  src: AdjustedYeastType;
  prefs: UserPreferencesType;
};
export function YeastDisplay({ src, prefs }: YeastDisplayProps) {
  return (
    <div className="mx-auto grid lg:grid-cols-2 gap-1 bg-gray-200/40">
      <Suspense fallback={<div>Loading...</div>}>
        <YeastDetailsTab src={src} prefs={prefs} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <YeastPropertiesTab src={src} prefs={prefs} />
      </Suspense>
    </div>
  );
  /** 
  return (
    <Tabs defaultValue="details">
      <Card ><CardHeader className="border-b-4 grid md:grid-cols-2 p-2 lg:px-4">
            <CardTitle className="w-full text-sm lg:text-2xl flex">
            <Yeast className="inline mr-2 m-auto" />
            <h3 className="grow px-2 lg:px-4">{src.name}</h3>
          </CardTitle>
          <TabsList className="m-auto w-full ">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="details">
            <YeastDetailsTab src={src} />
          </TabsContent>
          <TabsContent value="properties">
            <YeastPropertiesTab src={src} />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  )/
*/
}
export default YeastDisplay;
