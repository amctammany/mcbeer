import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listItemTitleVariants = cva(
  "line-clamp-1 flex w-fit items-center gap-1 ",
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
export type ListItemTitleProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & VariantProps<typeof listItemTitleVariants>;
export default function ListItemTitle({
  children,
  className,
  size,
}: ListItemTitleProps) {
  return (
    <div
      className={clsx(listItemTitleVariants({ size }), className)}
      data-slot="list-item-title"
    >
      {children}
    </div>
  );
}
