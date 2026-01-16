"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { prisma } from "@/lib/prisma";
import { adjustUnits, reduceUnits } from "@/lib/Converter/adjustUnits";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import { waterProfileSchema } from "@/schemas/ProfileSchemas";
import { revalidatePath } from "next/cache";
import { BaseWaterProfile } from "@/types/Profile";
export async function createWaterProfile(prev: any, formData: FormData) {
  const v = validateSchema(formData, waterProfileSchema);
  console.log(v.errors);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { ...rest } = reduceUnits(v.data) as BaseWaterProfile;

  const res = await prisma.waterProfile.create({
    data: { ...rest, slug: slugify(v.data.name) },
  });
  revalidatePath("/water");
  return redirect(`/water/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateWaterProfile(prev: any, formData: FormData) {
  const v = validateSchema(formData, waterProfileSchema);
  if (v.errors) console.log(v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { ...rest } = reduceUnits(v.data) as BaseWaterProfile;
  console.log(v.data, rest);
  const res = await prisma.waterProfile.update({
    where: {
      id: v.data.id,
    },
    data: { ...rest, slug: slugify(v.data.name) },
  });
  return redirect(`/water/${res.slug}`);
}
