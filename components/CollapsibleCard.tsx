import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import IconButton from "./Button/IconButton";
export type CollapsibleCardProps = {
  title: string | React.ReactNode;
  children: React.ReactNode;
};
export default function CollapsibleCard({
  title,
  children,
}: CollapsibleCardProps) {
  return (
    <Card className="m-2 lg:m-4 py-1 lg:py-4">
      <Collapsible className="group">
        <CollapsibleTrigger asChild>
          <CardHeader className="border-b-4  group-data-[state=closed]:border-none grid md:grid-cols-2 p-2 lg:px-4">
            <CardTitle className="w-full text-sm lg:text-2xl flex">
              {title}
            </CardTitle>
            <CardAction>
              <ChevronLeft className="ml-auto transition-transform duration-200 group-data-[state=open]:-rotate-90" />
            </CardAction>
          </CardHeader>
        </CollapsibleTrigger>
        <CardContent>
          <CollapsibleContent>{children}</CollapsibleContent>
        </CardContent>
      </Collapsible>
    </Card>
  );
}
