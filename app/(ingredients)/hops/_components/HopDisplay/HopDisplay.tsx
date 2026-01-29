import type { HopType } from "@/types/Ingredient";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import type { UserPreferencesType } from "@/types/User";
import Card from "@/components/Card";
import HopDetailsTab from "./HopDetailsTab";
import HopPropertiesTab from "./HopPropertiesTab";
export type HopDisplayProps = {
  src: HopType;
  prefs?: UserPreferencesType;
};
export function HopDisplay({ src, prefs }: HopDisplayProps) {
  console.log(src);
  return (
    <div className="mx-auto grid lg:grid-cols-2 gap-1 max-w-4xl ">
      <Suspense fallback={<div>Loading...</div>}>
        <HopDetailsTab src={src} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HopPropertiesTab src={src} />
      </Suspense>
    </div>
  );
  /**
   * 
  return (
    <Tabs defaultValue="details">
      <Card className="m-2 lg:m-4 py-1 lg:py-4">
        <CardHeader className="border-b-4 grid md:grid-cols-2 p-2 lg:px-4">
          <CardTitle className="w-full text-sm lg:text-2xl flex">
            <Hop className="inline mr-2 m-auto" />
            <h3 className="grow px-2 lg:px-4">{src.name}</h3>
          </CardTitle>
          <TabsList className="m-auto w-full ">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="details">
            <HopDetailsTab src={src} />
          </TabsContent>
          <TabsContent value="properties">
            <HopPropertiesTab src={src} />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
   */
}
export default HopDisplay;
