import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Style } from "@/generated/prisma/client";
import clsx from "clsx";
import React from "react";

export type StyleDisplayProps = {
  style: Style;
  className?: string;
};
const Prop = ({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) => (
  <Item size="sm" variant="outline">
    <ItemContent>
      <ItemTitle>{label}</ItemTitle>
      <ItemDescription className="text-pretty">{value}</ItemDescription>
    </ItemContent>
  </Item>
  /**
   * 
  <div className="flex justify-between py-2 border-b">
    <div className="font-medium">{label}</div>
    <div className="text-gray-600">{value}</div>
  </div>
   */
);
export function StyleDisplay({ style, className }: StyleDisplayProps) {
  return (
    <div className={clsx("p-4 *:m-1", className)}>
      <Prop label="Name" value={style.name} />
      <Prop label="Overall" value={style.overall} />
      <Prop label="Aroma" value={style.aroma} />
      <Prop label="Appearance" value={style.appearance} />
      <Prop label="Mouthfeel" value={style.mouthfeel} />
      <Prop label="Flavor" value={style.flavor} />
      <Prop label="Comments" value={style.comments} />
      <Prop label="History" value={style.history} />
      <Prop label="Ingredients" value={style.ingredients} />
      <Prop label="Comparision" value={style.comparison} />
      <Prop label="Examples" value={style.examples} />
      <Prop label="Ingredients" value={style.ingredients} />
    </div>
  );
}
