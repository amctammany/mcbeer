import { LinkProps } from "next/link";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { VariantProps } from "class-variance-authority";
import { Route } from "next";

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
export type LinkButtonProps = ButtonProps & {
  scroll?: boolean;
  href: LinkProps<Route>["href"];
};
export const LinkButton = ({ href, scroll, ...props }: LinkButtonProps) => {
  return (
    <Link href={href} scroll={scroll}>
      <Button {...props} />
    </Link>
  );
};
