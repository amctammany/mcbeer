import { Prop } from "@/components/Prop/Prop";
import { AmountProp } from "@/components/Prop/AmountProp";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdjustedHopType } from "@/types/Ingredient";
import React from "react";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
const HopDetailsTab = dynamic(() => import("./HopDetailsTab"));
const HopPropertiesTab = dynamic(() => import("./HopPropertiesTab"));
export type HopDisplayProps = {
  src: AdjustedHopType;
};
export function HopDisplay({ src }: HopDisplayProps) {
  return (
    <Tabs defaultValue="details">
      <Card className="m-2 lg:m-4 py-1 lg:py-4">
        <CardHeader className="border-b-4 grid md:grid-cols-2 p-2">
          <CardTitle className="m-auto text-sm lg:text-2xl">
            {src.name}
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
}
export default HopDisplay;
