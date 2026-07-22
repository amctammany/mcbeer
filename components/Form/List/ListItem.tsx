import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listItemVariants = cva(
  "group/list-item flex flex-row items-center border",
  {
    variants: {
      variant: {
        default: "border-transparent hover:bg-blue-100/75 border-b-black",
        outlined: "border-border",
      },
      size: {
        default: "gap-2.5 px-3 py-2.5",
        sm: "gap-2.5 px-3 py-2.5",
        xs: "gap-2.5 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
export type ListItemProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
} & VariantProps<typeof listItemVariants>;
export default function ListItem({
  children,
  className,
  variant,
  onClick,
  size,
}: ListItemProps) {
  return (
    <div
      className={clsx(listItemVariants({ size }), className)}
      data-slot="list-item"
      data-variant={variant}
      data-size={size}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
