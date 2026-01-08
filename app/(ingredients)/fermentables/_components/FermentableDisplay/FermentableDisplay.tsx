import { Prop } from "@/components/Prop/Prop";
import { AmountProp } from "@/components/Prop/AmountProp";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdjustedFermentableType } from "@/types/Ingredient";
import React from "react";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
const FermentableDetailsTab = dynamic(() => import("./FermentableDetailsTab"));
const FermentablePropertiesTab = dynamic(
  () => import("./FermentablePropertiesTab")
);
export type FermentableDisplayProps = {
  src: AdjustedFermentableType;
};
export function FermentableDisplay({ src }: FermentableDisplayProps) {
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
            <FermentableDetailsTab src={src} />
          </TabsContent>
          <TabsContent value="properties">
            <FermentablePropertiesTab src={src} />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}
export default FermentableDisplay;
