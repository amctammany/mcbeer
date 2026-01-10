import type { YeastType } from "@/types/Ingredient";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import type { UserPreferencesType } from "@/types/User";
import Card from "@/components/Card";
import YeastDetailsTab from "./YeastDetailsTab";
import YeastPropertiesTab from "./YeastPropertiesTab";
export type YeastDisplayProps = {
  src: YeastType;
  prefs: UserPreferencesType;
};
export function YeastDisplay({ src, prefs }: YeastDisplayProps) {
  return (
    <div className="mx-auto grid lg:grid-cols-2 gap-4">
      <Card title="Details">
        <Suspense fallback={<div>Loading...</div>}>
          <YeastDetailsTab src={src} prefs={prefs} />
        </Suspense>
      </Card>
      <Card title="Properties">
        <Suspense fallback={<div>Loading...</div>}>
          <YeastPropertiesTab src={src} prefs={prefs} />
        </Suspense>
      </Card>
    </div>
  );
  /**
   * 
  return (
    <Tabs defaultValue="details">
      <Card className="m-2 lg:m-4 py-1 lg:py-4">
        <CardHeader className="border-b-4 grid md:grid-cols-2 p-2 lg:px-4">
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
  );
   */
}
export default YeastDisplay;
