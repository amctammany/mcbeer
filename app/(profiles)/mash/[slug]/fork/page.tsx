import React from "react";
import { getMashProfile } from "@/app/(profiles)/mash/queries";
import { notFound, unauthorized } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import MashProfileEditor from "../../_components/MashProfileEditor/MashProfileEditor";
import { createMashProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import { MashProfileType } from "@/types/Profile";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/verifySession";

export type MashProfileForkPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: MashProfileForkPageProps): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const profile = await getMashProfile(slug);
  return {
    title: `Mash Profile: ${profile.name}`,
    description: "Mash profile editor",
  };
}
export default async function MashProfileForkPage({
  params,
}: MashProfileForkPageProps) {
  const { slug } = await params;
  const session = await verifySession(`/mash/${slug}/fork`);
  const { id, owner, origin, forks, ...old } = await getMashProfile(slug);
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
  } as MashProfileType;
  return (
    <MashProfileEditor
      profile={fork}
      preferences={prefs}
      action={createMashProfile.bind(null, prefs)}
    />
  );
}
