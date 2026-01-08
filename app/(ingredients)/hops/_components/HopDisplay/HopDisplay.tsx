import { AdjustedHopType } from "@/types/Ingredient";
import React from "react";
import dynamic from "next/dynamic";

import CollapsibleCard from "@/components/CollapsibleCard";
const HopDetailsTab = dynamic(() => import("./HopDetailsTab"));
const HopPropertiesTab = dynamic(() => import("./HopPropertiesTab"));
export type HopDisplayProps = {
  src: AdjustedHopType;
};
export function HopDisplay({ src }: HopDisplayProps) {
  return (
    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-4">
      <CollapsibleCard title="Details">
        <HopDetailsTab src={src} />
      </CollapsibleCard>
      <CollapsibleCard title="Properties">
        <HopPropertiesTab src={src} />
      </CollapsibleCard>
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
