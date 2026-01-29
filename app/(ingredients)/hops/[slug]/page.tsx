import React from "react";
import { getHop } from "../queries";
import HopDisplay from "../_components/HopDisplay/HopDisplay";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { getPreferences } from "@/app/admin/queries";
import { notFound } from "next/navigation";
import { HopMask } from "@/lib/Converter/Masks";
import HopDisplayToolbar from "../_components/HopDisplay/HopDisplayToolbar";

export type HopDisplayPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function HopDisplayPage({ params }: HopDisplayPageProps) {
  const { slug } = await params;
  const hop = await getHop(slug);
  // const prefs = await getPreferences();
  if (!hop) notFound();
  return (
    <div>
      <HopDisplayToolbar hop={hop} />
      <HopDisplay src={hop} />
    </div>
  );
}
