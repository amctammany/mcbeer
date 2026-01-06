import { Prop } from "@/components/Prop/Prop";
import { AmountProp } from "@/components/Prop/AmountProp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdjustedFermentableType } from "@/types/Ingredient";
import React from "react";

export type FermentableDisplayProps = {
  src: AdjustedFermentableType;
};
export function FermentableDisplay({ src }: FermentableDisplayProps) {
  return (
    <div className="grid lg:grid-cols-2">
      <Card className="m-4">
        <CardHeader className="border-b-4">
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-1 *:m-3">
            <div>
              <Prop label="Name" value={src.name} />
              <Prop label="Description" value={src.description} />
              <Prop label="Manufacturer" value={src.manufacturer} />
              <Prop label="Country" value={src.country} />
              <Prop label="Stability" value={src.stability} />
              <Prop label="Notes" value={src.notes} />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="m-4">
        <CardHeader className="border-b-4">
          <CardTitle>Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-1 *:m-3">
            <div>
              <AmountProp label="Color" value={src.color} />
              <Prop label="Power" value={src.power} />
              <AmountProp
                precision={4}
                label="Potential"
                value={src.potential}
              />
              <AmountProp label="Protein" value={src.protein} />
              <AmountProp label="Friability" value={src.friability} />
              <AmountProp label="Max Usage" value={src.maxUsage} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default FermentableDisplay;
