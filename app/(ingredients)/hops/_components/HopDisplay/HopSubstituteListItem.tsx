import ListItem from "@/components/Form/List/ListItem";
import ListItemContent from "@/components/Form/List/ListItemContent";
import ListItemIcon from "@/components/Form/List/ListItemIcon";
import ListItemTitle from "@/components/Form/List/ListItemTitle";
import { HopIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export type HopSubstituteListItemProps = {
  src?: any;
};
export default function HopSubstituteListItem({
  src,
}: HopSubstituteListItemProps) {
  return (
    <Link href={`/hops/${src}`}>
      <ListItem>
        <ListItemIcon>
          <HopIcon />
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>{src}</ListItemTitle>
        </ListItemContent>
      </ListItem>
    </Link>
  );
}
