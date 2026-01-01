"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { prisma } from "@/lib/prisma";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { EquipmentProfileMask } from "@/lib/Converter/Masks";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import { equipmentProfileSchema } from "@/schemas/ProfileSchemas";
import { revalidatePath } from "next/cache";
export async function createEquipmentProfile(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, equipmentProfileSchema);
  console.log(v.errors);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: EquipmentProfileMask,
    inline: true,
    dir: false,
  });

  const res = await prisma.equipmentProfile.create({
    data: { ...adj, slug: slugify(v.data.name) },
  });
  revalidatePath("/equipment");
  return redirect(`/equipment/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateEquipmentProfile(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, equipmentProfileSchema);
  if (v.errors) console.log(v);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: EquipmentProfileMask,
    inline: true,
    dir: false,
  });

  const res = await prisma.equipmentProfile.update({
    where: {
      id: v.data.id,
    },
    data: { ...adj, slug: slugify(v.data.name) },
  });
  return redirect(`/equipment/${res.slug}`);
}
