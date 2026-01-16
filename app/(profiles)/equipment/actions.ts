"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { prisma } from "@/lib/prisma";
import { adjustUnits, reduceUnits } from "@/lib/Converter/adjustUnits";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import { equipmentProfileSchema } from "@/schemas/ProfileSchemas";
import { revalidatePath } from "next/cache";
import { BaseEquipmentProfile, EquipmentProfileType } from "@/types/Profile";
export async function createEquipmentProfile(
  // prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, equipmentProfileSchema);
  // console.log(v.errors);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  // const adj = adjustUnits({
  //   src: v.data,
  //   prefs,
  //   mask: EquipmentProfileMask,
  //   inline: true,
  //   dir: false,
  // });
  const r = reduceUnits(v.data) as BaseEquipmentProfile;

  const res = await prisma.equipmentProfile.create({
    data: { ...r, slug: slugify(v.data.name) },
  });
  revalidatePath("/equipment");
  return redirect(`/equipment/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateEquipmentProfile(prev: any, formData: FormData) {
  const v = validateSchema(formData, equipmentProfileSchema);
  if (v.errors) console.log(v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const r = reduceUnits(v.data) as BaseEquipmentProfile;
  // console.log(v.data, r);
  // const adj = adjustUnits({
  //   src: v.data,
  //   prefs,
  //   mask: EquipmentProfileMask,
  //   inline: true,
  //   dir: false,
  // });

  const res = await prisma.equipmentProfile.update({
    where: {
      id: v.data.id,
    },
    data: { ...r, slug: slugify(v.data.name) },
  });
  return redirect(`/equipment/${res.slug}`);
}
