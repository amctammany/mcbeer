"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSidebar } from "./ui/sidebar";

export function RouteChangeListener() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    if (isMobile) setOpenMobile(false);
  }, [pathname]);

  return <></>;
}
