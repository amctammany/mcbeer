"use server";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { adjustUnits, reduceUnits } from "@/lib/Converter/adjustUnits";
import { HopMask } from "@/lib/Converter/Masks";
import { prisma } from "@/lib/prisma";
import slugify from "@/lib/slugify";
import { validateSchema } from "@/lib/validateSchema";
import { hopSchema } from "@/schemas/IngredientSchemas";
import { BaseHopType } from "@/types/Ingredient";
import { revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createHop(
  // prefs: UserPreferencesType,
  prev: any,
  formData: FormData,
) {
  const v = validateSchema(formData, hopSchema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { substitutesString, ...r } = reduceUnits(v.data);
  /**
   * 
  const { tempRange, ...adj } = adjustUnits({
    src: v.data,
    prefs,
    mask: HopMask,
    inline: true,
    dir: false,
  });
   */
  const subNames = substitutesString.map(({ text }) => text);

  const subs = await prisma.hop.findMany({
    where: {
      name: { in: subNames },
    },
    select: {
      name: true,
      id: true,
    },
  });
  const res = await prisma.hop.create({
    data: {
      ...(r as BaseHopType),
      substitutesString: subNames,
      substitutes: {
        connect: subs.map(({ id }) => ({
          id,
        })),
      },
      slug: slugify(v.data.name),
    },
  });
  updateTag("hops");
  return redirect(`/hops/${res.slug}`);
  //  return { success: true, data: res };
}

export async function updateHop(
  // prefs: UserPreferencesType,
  prev: any,
  formData: FormData,
) {
  const v = validateSchema(formData, hopSchema);

  if (v.errors) {
    console.log(v);
    return v;
  }
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { substitutesString, ...r } = reduceUnits(v.data);
  /**
   * 
  const adj = adjustUnits({
    src: v.data,
    prefs,
    mask: HopMask,
    inline: true,
    dir: false,
    precision: 4,
  });

   */
  const subNames = substitutesString.map(({ text }) => text);

  const subs = await prisma.hop.findMany({
    where: {
      name: { in: subNames },
    },
    select: {
      name: true,
      id: true,
    },
  });
  console.log(subs);
  const res = await prisma.hop.update({
    where: {
      id: v.data.id,
    },
    data: {
      ...(r as BaseHopType),
      substitutesString: subNames,

      substitutes: {
        connect: subs.map(({ id }) => ({
          // where: { baseId_subId: { baseId: v.data.id!, subId: id } },
          id,
          // create: { baseId: v.data.id, subId: id },
        })),
      },
      slug: slugify(v.data.name),
    },
  });
  revalidatePath(`/hops/${res.slug}`);
  return redirect(`/hops/${res.slug}`);
}
