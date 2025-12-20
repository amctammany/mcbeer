//"use client";
import { Route } from "next";
import Link, { LinkProps } from "next/link";
import React, { ComponentProps } from "react";

export interface NavLinkProps extends ComponentProps<"a"> {
  href: string;
}
export function NavLink(props: NavLinkProps) {
  /** const { setOpenMobile } = useSidebar();
  const handleClick = () => {
    setOpenMobile(false);
  };
*/
  return <Link {...props} href={props.href as Route} prefetch={false} />;
}

export default NavLink;
