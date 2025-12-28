import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { cx, VariantProps } from "class-variance-authority";
import { LinkButton } from "./LinkButton";
import { LucideIcon } from "lucide-react";
import { Route } from "next";

function getIconSize(
  size:
    | "sm"
    | "md"
    | "lg"
    | "default"
    | "icon"
    | "xl"
    | "icon-sm"
    | "icon-md"
    | "icon-lg"
) {
  switch (size) {
    case "sm":
      return 16;
    case "md":
      return 20;
    case "lg":
      return 24;
    case "xl":
      return 28;
    case "icon":
      return 14;

    case "default":
      return 20;
    default:
      return 20;
  }
}
export type IconButtonProps = {
  icon: LucideIcon;
  href?: string;
  label?: any;
} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
export default function IconButton({
  icon: Icon,
  label,
  children,
  href,
  ...props
}: IconButtonProps) {
  return href ? (
    <LinkButton
      href={href as Route}
      variant="outline"
      size={props.size}
      {...props}
    >
      <Icon size={getIconSize(props.size ?? "md")} />
      <span className={cx("hidden md:block")}>{label ?? children}</span>
    </LinkButton>
  ) : (
    <Button variant="outline" size={props.size} {...props}>
      <Icon size={getIconSize(props.size ?? "md")} />
      <span className={cx("hidden md:block")}>{label ?? children}</span>
    </Button>
  );
}
