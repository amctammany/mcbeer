import React from "react";
import { getEquipmentProfile } from "../../queries";
import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import EquipmentProfileEditor from "../../_components/EquipmentProfileEditor/EquipmentProfileEditor";
import { createEquipmentProfile, updateEquipmentProfile } from "../../actions";
import { getPreferences } from "@/app/admin/queries";
import slugify from "@/lib/slugify";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { AdjustedEquipmentProfileType } from "@/types/Profile";

export type EquipmentProfileForkPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function EquipmentProfileForkPage({
  params,
}: EquipmentProfileForkPageProps) {
  const { slug } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return unauthorized();
  }
  const prefs = await getPreferences();

  const { id, owner, origin, forks, ...old } = await getEquipmentProfile(slug);
  const count = await prisma.equipmentProfile.count({
    where: { userId: session.user.id, forkedFrom: id },
  });
  const name = `${session.user.name} - ${old.name} (${count})`;
  const fork = {
    ...old,
    name,
    slug: slugify(name, { lower: true }),
    forkedFrom: id,
    userId: session.user.id,
  };
  /**
  const fork = await prisma.equipmentProfile.create({
    data: {
      ...old,
      name,
      slug: slugify(name, { lower: true }),
      forkedFrom: id,
      userId: session.user.id,
    },
  });
   * 
   */ const adjusted = adjustUnits({
    src: fork,
    mask: EquipmentProfileMask,
    prefs,
    inline: true,
    dir: true,
  }) as AdjustedEquipmentProfileType;
  return (
    <EquipmentProfileEditor
      profile={adjusted}
      action={createEquipmentProfile.bind(null, prefs)}
      preferences={prefs}
    />
  );
}
