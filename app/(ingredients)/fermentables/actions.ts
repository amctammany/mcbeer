"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { adjustUnits, reduceUnits } from "@/lib/Converter/adjustUnits";
import { FermentableMask } from "@/lib/Converter/Masks";
import { prisma } from "@/lib/prisma";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { fermentableSchema } from "@/schemas/IngredientSchemas";
import { BaseFermentableType } from "@/types/Ingredient";
import { revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createFermentable(
  // prefs: UserPreferencesType,
  prev: any,
  formData: FormData,
) {
  const v = validateSchema(formData, fermentableSchema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  // const adj = adjustUnits({
  //   src: v.data,
  //   prefs,
  //   mask: FermentableMask,
  //   inline: true,
  //   dir: false,
  // });

  const r = reduceUnits(v.data) as BaseFermentableType;
  const res = await prisma.fermentable.create({
    data: { ...r, slug: slugify(v.data.name) },
  });
  updateTag("fermentables");
  return redirect(`/fermentables/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateFermentable(
  // prefs: UserPreferencesType,
  prev: any,
  formData: FormData,
) {
  const v = validateSchema(formData, fermentableSchema);
  if (v.errors) return v;
  if (!v.success) {
    return v;
  }
  const r = reduceUnits(v.data) as BaseFermentableType;
  console.log(v, r);
  /**
   * 
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: FermentableMask,
    inline: true,
    dir: false,
    precision: 4,
  });

   */
  const res = await prisma.fermentable.update({
    where: {
      id: v.data.id,
    },
    data: { ...r, slug: slugify(v.data.name) },
  });
  updateTag(`fermentables-${res.id}`);
  // revalidatePath(`/fermentables/${res.slug}`);
  return redirect(`/fermentables/${res.slug}`);
}
