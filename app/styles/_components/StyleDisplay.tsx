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
  children,
}: {
  label: string;
  unit?: string;
  value?: string | number | null;
  children?: React.ReactNode;
}) => (
  <Item size="sm" variant="outline" className="m-1">
    <ItemContent>
      <ItemTitle>{label}</ItemTitle>
      <ItemDescription className="text-pretty">
        {children ?? value}
      </ItemDescription>
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
    <div className={clsx("p-4 grid lg:grid-cols-2", className)}>
      <div>
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
      <div>
        <Prop label="IBU Range" unit="">
          {style?.ibuLow} - {style?.ibuHigh}
        </Prop>
        <Prop label="ABV Range" unit="%">
          {style?.abvLow} - {style?.abvHigh}
        </Prop>
        <Prop label="OG Range" unit="">
          {style?.ogLow} - {style?.ogHigh}
        </Prop>
        <Prop label="FG Range" unit="">
          {style?.fgLow} - {style?.fgHigh}
        </Prop>
        <Prop label="SRM Range" unit="&deg;L">
          {style?.srmLow} - {style?.srmHigh}
        </Prop>
      </div>
    </div>
  );
}
