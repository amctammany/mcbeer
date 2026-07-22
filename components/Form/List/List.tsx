import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listVariants = cva(
  "group/list flex border flex-col w-full gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2 *:border-b-2",
  {
    variants: {
      variant: {
        default: "border-transparent",
        outlined: "border-border",
      },
      size: {
        default: [""],
        small: [""],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
export type ListProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & VariantProps<typeof listVariants>;
export default function List({ children, className, size }: ListProps) {
  return (
    <div
      className={clsx(listVariants({ size }), className)}
      role="list"
      data-slot="list"
    >
      {children}
    </div>
  );
}
