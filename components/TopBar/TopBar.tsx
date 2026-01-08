import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import Trigger from "./Trigger";

export type BreadCrumb = {
  title: string;
  url?: string;
  isCurrent?: boolean;
};
export function TopBar({
  breadcrumbs = [],
  children,
}: {
  breadcrumbs?: BreadCrumb[];
  children?: React.ReactNode;
}) {
  const crumbs = breadcrumbs.slice(0, -1);
  const final = breadcrumbs[breadcrumbs.length - 1];
  return (
    <header className="sticky w-full top-0 z-50 flex shrink-0 h-12 items-center gap-2 transition-[width,height] ease-linear bg-sidebar-accent group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-2 ">
      <div className="flex items-center lg:gap-2 px-1 lg:px-4">
        <Trigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        {breadcrumbs.length > 0 && (
          <Breadcrumb>
            <BreadcrumbList className="*:not-last:hidden lg:*:not-last:block">
              {crumbs.map((crumb) => (
                <React.Fragment key={crumb.title}>
                  <BreadcrumbItem className="idden dlock">
                    {crumb.url ? (
                      <BreadcrumbLink href={crumb.url ? crumb.url : "#"}>
                        {crumb.title}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hiden md:bloc" />
                </React.Fragment>
              ))}
              <BreadcrumbItem>
                <BreadcrumbPage>{final.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>
      <div className="ml-auto flex items-center gap-2 px-4">{children}</div>
    </header>
  );
}
