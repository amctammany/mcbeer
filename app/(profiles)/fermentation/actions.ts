"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { prisma } from "@/lib/prisma";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import { fermentationProfileSchema } from "@/schemas/ProfileSchemas";
import { revalidatePath } from "next/cache";
import { FermentationProfileMask } from "@/lib/Converter/Masks";
import { FermentationStepType } from "@/types/Profile";
export async function createFermentationProfile(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, fermentationProfileSchema);
  console.log(v.errors);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { steps, ...adj } = adjustUnits({
    src: v.data,
    prefs,
    mask: FermentationProfileMask,
    inline: true,
    dir: false,
  });
  console.log(adj, steps, v.data.steps);
  const res = await prisma.fermentationProfile.create({
    data: {
      ...adj,
      steps: { createMany: { data: steps } },
      slug: slugify(v.data.name),
    },
  });
  revalidatePath("/fermentation");
  return redirect(`/fermentation/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateFermentationProfile(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, fermentationProfileSchema);
  if (v.errors) console.log(v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: FermentationProfileMask,
    inline: true,
    dir: false,
  });
  const { steps, ...data } = adj;

  const stepData = await prisma.$transaction(async (tx) => {
    return Promise.all(
      (steps as FermentationStepType[]).map(async ({ id, ...d }) => {
        return await tx.fermentationStep.upsert({
          where: {
            fermentationIndex: {
              fermentationProfileId: data.id!,
              index: d.index,
            },
          },
          create: { ...d, fermentationProfileId: data.id! },
          update: d,
        });
      })
    );
  });
  const res = await prisma.fermentationProfile.update({
    where: {
      id: v.data.id,
    },
    data: {
      ...data,
      slug: slugify(v.data.name),
      steps: {
        connect: stepData.map(({ id }) => ({ id })),
        deleteMany: { index: { gt: stepData.length - 1 } },
      },
    },
  });
  return redirect(`/fermentation/${res.slug}`);
}
