import clsx from "clsx";
import React from "react";
export type SectionProps = {
  title?: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  actions?: React.ReactNode | React.ReactNode[];
};
export default function Section({
  title,
  children,
  className,
  actions,
}: SectionProps) {
  return (
    <div className={clsx("border-3 border-grey-300 rounded-md ", className)}>
      <div
        className={clsx("border-b-2 m-0 px-4 py-2 rounded-sm bg-gray-100 flex")}
      >
        <h3 className="font-bold text-lg lg:text-xl [font-variant:small-caps] underline grow m-auto">
          {title}
        </h3>
        <div className="shrink">{actions}</div>
      </div>
      <div className="p-0 m-0">{children}</div>
    </div>
  );
}
