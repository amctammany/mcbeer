import { LucideProps, Thermometer } from "lucide-react";
import React from "react";

export type BadgePropProps = {
  Icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  text: string | React.ReactNode;
  unit?: string | React.ReactNode;
};
export default function BadgeProp({ Icon, text, unit }: BadgePropProps) {
  return (
    <div className="border border-black rounded-md inline-flex items-stretch justify-center m-auto pr-2 *:my-auto">
      <div className="p-1  rounded-l-md border-r-2 bg-accent text-primary">
        {Icon && <Icon />}
      </div>
      <div className="grow text-primary ml-2">{text}</div>
      <div className="px-1">{unit}</div>
    </div>
  );
}
