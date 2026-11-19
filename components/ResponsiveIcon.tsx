import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import React from "react";

const responsiveIconVariants = cva(" ", {
  variants: {
    size: {
      default: "w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6",
      sm: ["w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 "],
      xs: ["w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 "],
      lg: "",
      icon: "",
      "icon-xs": "",
      "icon-sm": "",
      "icon-lg": "",
    },
  },
  defaultVariants: { size: "default" },
});
export type ResponsiveIconProps = {
  icon: LucideIcon;
  className?: string;
} & VariantProps<typeof responsiveIconVariants>;
export default function ResponsiveIcon({
  icon: Icon,
  className,
  size,
}: ResponsiveIconProps) {
  return <Icon className={clsx(responsiveIconVariants({ size }), className)} />;
}
