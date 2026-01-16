"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { prisma } from "@/lib/prisma";
import { adjustUnits, reduceUnits } from "@/lib/Converter/adjustUnits";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import { mashProfileSchema } from "@/schemas/ProfileSchemas";
import { revalidatePath } from "next/cache";
import { MashProfileMask } from "@/lib/Converter/Masks";
import {
  AdjustedMashProfileType,
  BaseMashProfile,
  MashProfileType,
  MashStepType,
} from "@/types/Profile";
export async function createMashProfile(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, mashProfileSchema);
  console.log(v.errors);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { steps, ...adj } = adjustUnits({
    src: v.data,
    prefs,
    mask: MashProfileMask,
    inline: true,
    dir: false,
  });
  console.log(adj, steps, v.data.steps);
  const res = await prisma.mashProfile.create({
    data: {
      ...adj,
      steps: { createMany: { data: steps } },
      slug: slugify(v.data.name),
    },
  });
  revalidatePath("/mash");
  return redirect(`/mash/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateMashProfile(
  // prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  console.log(Object.fromEntries(formData.entries()), mashProfileSchema);
  const v = validateSchema(formData, mashProfileSchema);
  if (v.errors) console.log(v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const r = reduceUnits(v.data);
  /**
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: MashProfileMask,
    inline: true,
    dir: false,
  }); */
  const { steps, ...data } = r as BaseMashProfile;

  const stepData = await prisma.$transaction(async (tx) => {
    return Promise.all(
      (steps as MashStepType[]).map(async ({ id, ...d }) => {
        return await tx.mashStep.upsert({
          where: {
            mashIndex: { mashProfileId: data.id! as string, index: d.index },
          },
          create: { ...d, mashProfileId: data.id! as string },
          update: d,
        });
      })
    );
  });
  const res = await prisma.mashProfile.update({
    where: {
      id: v.data.id,
    },
    data: {
      ...data,
      userId: data.userId!,
      slug: slugify(v.data.name),
      steps: {
        connect: stepData.map(({ id }) => ({ id })),
        deleteMany: { index: { gt: stepData.length - 1 } },
      },
    },
  });
  return redirect(`/mash/${res.slug}`);
}
