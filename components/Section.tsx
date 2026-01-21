import React from "react";
export type SectionProps = {
  title?: string | React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
};
export default function Section({ title, children }: SectionProps) {
  return (
    <div>
      <h3 className="font-bold border-b-2 m-2 px-4">{title}</h3>
      <div className="p-2 m-2">{children}</div>
    </div>
  );
}
