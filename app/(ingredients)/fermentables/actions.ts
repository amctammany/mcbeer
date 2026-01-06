"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { FermentableMask } from "@/lib/Converter/Masks";
import { prisma } from "@/lib/prisma";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { fermentableSchema } from "@/schemas/IngredientSchemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createFermentable(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, fermentableSchema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: FermentableMask,
    inline: true,
    dir: false,
  });
  const res = await prisma.fermentable.create({
    data: { ...adj, slug: slugify(v.data.name) },
  });
  return redirect(`/fermentables/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateFermentable(
  prefs: UserPreferencesType,
  prev: any,
  formData: FormData
) {
  const v = validateSchema(formData, fermentableSchema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: FermentableMask,
    inline: true,
    dir: false,
  });
  console.log(v.data, adj);

  const res = await prisma.fermentable.update({
    where: {
      id: v.data.id,
    },
    data: { ...adj, slug: slugify(v.data.name) },
  });
  revalidatePath(`/fermentables/${res.slug}`);
  return redirect(`/fermentables/${res.slug}`);
}
