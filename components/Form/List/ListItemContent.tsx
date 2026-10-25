import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listItemContentVariants = cva(
  "grid gap-1 md:flex md:flex1 md:flex-row         [&+[data-slot=list-item-content]]:lex-none grow",
  {
    variants: {
      // variant: {
      // default: "md:flex md:flex-1 flex-col md:flex-row",
      // grid: ["grid"],
      // },
      size: {
        default: [""],
        small: [""],
      },
    },
    defaultVariants: {
      // variant: "default",
      size: "default",
    },
  },
);
export type ListItemContentProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & VariantProps<typeof listItemContentVariants>;
export default function ListItemContent({
  children,
  // variant,
  className,
  size,
}: ListItemContentProps) {
  return (
    <div
      className={clsx(listItemContentVariants({ size }), className)}
      data-slot="list-item-content"
    >
      {children}
    </div>
  );
}
