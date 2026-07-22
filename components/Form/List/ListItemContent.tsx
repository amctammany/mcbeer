import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listItemContentVariants = cva(
  "flex flex-1 flex-col md:flex-row gap-1 [&+[data-slot=list-item-content]]:lex-none",
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
export type ListItemContentProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & VariantProps<typeof listItemContentVariants>;
export default function ListItemContent({
  children,
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
