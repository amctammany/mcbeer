"use server";
import { VesselType } from "@/generated/prisma/enums";
import { reduceUnits } from "@/lib/Converter/adjustUnits";
import { prisma } from "@/lib/prisma";
import { validateSchema } from "@/lib/validateSchema";
import { unitValueSchema } from "@/schemas/ProfileSchemas";
import { BreweryType } from "@/types/Brewery";
import { redirect } from "next/navigation";
import z from "zod";
import { zfd } from "zod-form-data";

const vesselSchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  breweryId: zfd.text(z.string().optional()),
  name: zfd.text(),
  volume: unitValueSchema(z.number()),
  type: z.enum(VesselType),
});
const schema = zfd.formData({
  //userId: zfd.text(),
  id: zfd.text(z.string().optional()),
  userId: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(z.string().optional()),
  address: zfd.text(z.string().optional()),
  city: zfd.text(z.string().optional()),
  state: zfd.text(z.string().optional()),
  country: zfd.text(z.string().optional()),
  vessels: zfd.repeatableOfType(vesselSchema),
});
export async function createBrewery(prev: any, formData: FormData) {
  const v = validateSchema(formData, schema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { userId, vessels, ...data } = v.data;
  const brewery = await prisma.brewery.create({
    data,
  });
  const breweryUser = await prisma.breweryUser.create({
    data: {
      breweryId: brewery.id,
      userId: userId!,
    },
  });
  redirect(`/brewery/${brewery.id}`);
}
export async function updateBrewery(prev: any, formData: FormData) {
  const v = validateSchema(formData, schema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { userId, ...data } = v.data;
  const { id, vessels, users, ...r } = reduceUnits(data) as BreweryType;
  const brewery = await prisma.brewery.update({
    where: { id: data.id },
    data: r,
  });
  const vtx = await prisma.$transaction([
    ...vessels.map(({ id: _id, brewery, ...d }) => {
      return _id
        ? prisma.vessel.update({
            where: {
              id: _id,
            },
            data: { ...d, breweryId: id! },
          })
        : prisma.vessel.create({
            data: { ...d, breweryId: id! },
          });
    }),
  ]);

  redirect(`/brewery/${brewery.id}`);
}

export async function updateBreweryInventory(prev: any, formData: FormData) {
  const v = validateSchema(formData, schema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { userId, ...data } = v.data;
  const brewery = await prisma.brewery.update({
    where: { id: data.id },
    data,
  });

  redirect(`/brewery/${brewery.id}`);
}
