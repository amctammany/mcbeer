"use client";
import { MaskContext } from "@/contexts/MaskContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { LucideProps, Thermometer } from "lucide-react";
import React, { useContext } from "react";

export type BadgePropProps = {
  // Icon?: React.ForwardRefExoticComponent<
  // Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  // >;
  Icon?: React.ReactNode;
  name: string;
  text: string | React.ReactNode;
  unit?: string | React.ReactNode;
};
export default function BadgeProp({ Icon, name, text, unit }: BadgePropProps) {
  const prefs = useContext(UserPreferencesContext);
  const { mask } = useContext(MaskContext);
  const r1 = mask[name];
  const r = Array.isArray(r1) ? r1[0] : r1;
  const s = prefs[r as keyof typeof prefs];
  console.log(name, r, s, unit);
  return (
    <div className="border border-black rounded-md inline-flex items-stretch justify-center m-auto pr-2 *:my-auto">
      <div className="p-1  rounded-l-md border-r-2 bg-accent text-primary">
        {Icon}
      </div>
      <div className="grow text-primary ml-2">{text}</div>
      <div className="px-1">{unit}</div>
    </div>
  );
}
