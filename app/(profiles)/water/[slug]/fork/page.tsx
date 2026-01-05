import React from "react";
import { getWaterProfile } from "@/app/(profiles)/water/queries";
import { notFound, unauthorized } from "next/navigation";
import { TopBar } from "@/components/TopBar/TopBar";
import IconButton from "@/components/Button/IconButton";
import { Pencil, Split } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import WaterProfileEditor from "../../_components/WaterProfileEditor/WaterProfileEditor";
import { createWaterProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { WaterProfileType } from "@/types/Profile";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/verifySession";

export type WaterProfileForkPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: WaterProfileForkPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getWaterProfile(slug);
  return {
    title: `Water Profile: ${profile.name}`,
    description: "Water profile editor",
  };
}
export default async function WaterProfileForkPage({
  params,
}: WaterProfileForkPageProps) {
  const { slug } = await params;
  const session = await verifySession(`/water/${slug}/fork`);
  const { id, owner, origin, forks, ...old } = await getWaterProfile(slug);
  if (!old) notFound();
  const count = await prisma.equipmentProfile.count({
    where: { userId: session.user.id, forkedFrom: id },
  });
  const name = `${session.user.name} - ${old.name} (${count})`;
  const prefs = await getPreferences();
  const fork = {
    ...old,
    name,
    userId: session?.user.id,
    origin: old,
    forkedFrom: id,
  } as WaterProfileType;
  return (
    <WaterProfileEditor
      profile={fork}
      preferences={prefs}
      action={createWaterProfile}
    />
  );
}
