import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listItemDescriptionVariants = cva(
  "line-clamp-2 text-left w-fit items-center gap-1 ",
  {
    variants: {
      size: {
        default: [""],
        small: [""],
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);
export type ListItemDescriptionProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & VariantProps<typeof listItemDescriptionVariants>;
export default function ListItemDescription({
  children,
  className,
  size,
}: ListItemDescriptionProps) {
  return (
    <div
      className={clsx(listItemDescriptionVariants({ size }), className)}
      data-slot="list-item-description"
    >
      {children}
    </div>
  );
}
