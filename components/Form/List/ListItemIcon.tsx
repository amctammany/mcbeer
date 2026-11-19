import { getIconSize } from "@/components/Button/IconButton";
import ResponsiveIcon from "@/components/ResponsiveIcon";
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
        xs: [""],
        sm: [""],
        icon: ["w-6 h-6"],
        "icon-sm": ["w-4 h-4"],
        "icon-xs": ["w-3 h-3"],
        // "icon-md": ["w-5 h-5"],
        "icon-lg": ["w-7 h-7"],
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
  responsive?: boolean;
} & VariantProps<typeof listItemIconVariants>;
export default function ListItemIcon({
  children,
  className,
  icon: Icon,
  size,
  responsive = true,
  variant,
}: ListItemIconProps) {
  // const sz = useMediaQuery("(min-width: 768px)") ? "default" : "sm";
  // const s = getIconSize(size || sz);
  const child = Icon ? (
    responsive ? (
      <ResponsiveIcon icon={Icon} size={size} />
    ) : (
      <Icon size={getIconSize(size ?? "default")} />
    )
  ) : (
    children
  );

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
