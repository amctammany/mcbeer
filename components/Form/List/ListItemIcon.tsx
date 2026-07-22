import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listItemIconVariants = cva(
  "flex shrink-0 items-center justify-center gap-1 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: [],
        outlined: [],
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
export type ListItemIconProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & VariantProps<typeof listItemIconVariants>;
export default function ListItemIcon({
  children,
  className,
  size,
  variant,
}: ListItemIconProps) {
  return (
    <div
      className={clsx(listItemIconVariants({ size }), className)}
      data-slot="list-item-icon"
      data-variant={variant}
      data-size={size}
    >
      {children}
    </div>
  );
}
