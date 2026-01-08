"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { HopMask } from "@/lib/Converter/Masks";
import { prisma } from "@/lib/prisma";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { hopSchema } from "@/schemas/IngredientSchemas";
import { revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createHop(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, hopSchema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: HopMask,
    inline: true,
    dir: false,
  });
  const res = await prisma.hop.create({
    data: { ...adj, slug: slugify(v.data.name) },
  });
  updateTag("hops");
  return redirect(`/hops/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateHop(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, hopSchema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: HopMask,
    inline: true,
    dir: false,
    precision: 4,
  });

  const res = await prisma.hop.update({
    where: {
      id: v.data.id,
    },
    data: { ...adj, slug: slugify(v.data.name) },
  });
  revalidatePath(`/hops/${res.slug}`);
  return redirect(`/hops/${res.slug}`);
}
