"use client";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
const listItemMenuVariants = cva("flex items-center justify-center gap-1", {
  variants: {
    size: {
      default: [""],
      small: [""],
    },
  },
  defaultVariants: {
    size: "default",
  },
});
export type ListItemMenuProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & VariantProps<typeof listItemMenuVariants>;
export default function ListItemMenu({
  children,
  className,
  size,
}: ListItemMenuProps) {
  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  return (
    <div
      onClick={handleClick}
      className={clsx(listItemMenuVariants({ size }), className)}
      data-slot="list-item-menu"
    >
      {children}
    </div>
  );
}
