import { getIconSize } from "@/components/Button/IconButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
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
        default: ["mr-1 md:mg-2"],
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
  icon?: LucideIcon;
  className?: string;
} & VariantProps<typeof listItemIconVariants>;
export default function ListItemIcon({
  children,
  className,
  icon: Icon,
  size,
  variant,
}: ListItemIconProps) {
  const sz = size || useMediaQuery("(min-width: 768px)") ? "default" : "sm";
  const s = getIconSize(sz);
  const child = Icon ? <Icon size={s} /> : children;

  return (
    <div
      className={clsx(listItemIconVariants({ size }), className)}
      data-slot="list-item-icon"
      data-variant={variant}
      data-size={size}
    >
      {child}
    </div>
  );
}
