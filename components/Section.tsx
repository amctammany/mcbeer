import clsx from "clsx";
import React from "react";
export type SectionProps = {
  title?: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
};
export default function Section({ title, children, className }: SectionProps) {
  return (
    <div className={clsx("border-3 border-grey-300 rounded-md ", className)}>
      <h3 className="font-bold text-lg lg:text-xl border-b-2 m-0 px-4 py-2 underline rounded-sm bg-gray-100">
        {title}
      </h3>
      <div className="p-0 m-0">{children}</div>
    </div>
  );
}
