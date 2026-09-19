"use server";
import { Vessel } from "@/generated/prisma/client";
import { VesselType } from "@/generated/prisma/enums";
import { reduceUnits } from "@/lib/Converter/adjustUnits";
import { prisma } from "@/lib/prisma";
import { validateSchema } from "@/lib/validateSchema";
import { unitValueSchema } from "@/schemas/ProfileSchemas";
import { BaseBreweryType, BaseVesselType, BreweryType } from "@/types/Brewery";
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
  const r = reduceUnits(v.data) as BaseBreweryType & {
    userId: string;
    vessels: BaseVesselType[];
  };
  const { userId, vessels, ...data } = r;
  const vesselData = (vessels as Vessel[]).map(
    ({ name, volume, type, breweryId }) => ({
      name,
      volume,
      type,
      breweryId,
    }),
  );
  const brewery = await prisma.brewery.create({
    data: {
      ...data,
      name: data.name!,
      vessels: {
        create: vesselData,
      },
    },
  });
  const breweryUser = await prisma.breweryUser.create({
    data: {
      brewery: { connect: { id: brewery.id } },
      user: {
        connect: { id: v.data.userId },
      },
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
  console.log({ prev: prev.data.vessels, data, vessels, users, r });
  const vesselData = (vessels as BaseVesselType[]).map(
    ({ id, name, volume, type, breweryId }) => ({
      id,
      name,
      volume,
      type,
      breweryId,
    }),
  );

  const oldVIds = prev.data.vessels.map(({ id }: { id: string }) => id);
  const newVIds = vesselData.map(({ id }) => id);
  const missing = oldVIds.filter((o: any) => !newVIds.includes(o));

  const removed = await prisma.vessel.deleteMany({
    where: {
      id: { in: missing },
    },
  });
  const vtx = await prisma.$transaction([
    ...vesselData.map(({ id: _id, ...d }) => {
      return _id
        ? prisma.vessel.update({
            where: {
              id: _id,
            },
            data: { ...d },
          })
        : prisma.vessel.create({
            data: { ...d, name: d.name! },
          });
    }),
    prisma.brewery.update({
      where: { id: data.id },
      data: {
        ...r,
        // vessels: {
        // set: [],
        // connect: vtx.map(({ id: _id }) => ({ id: _id })),
        // },
      },
      include: {
        vessels: true,
      },
    }),
  ]);
  console.log({ oldVIds, newVIds, missing, removed });
  /**
  const brewery = await prisma.brewery.update({
    where: { id: data.id },
    data: {
      ...r,
      // vessels: {
      // set: [],
      // connect: vtx.map(({ id: _id }) => ({ id: _id })),
      // },
    },
    include: {
      vessels: true,
    },
  });
  console.log(brewery);
 */

  redirect(`/brewery/${id}`);
}

export async function updateBreweryInventory(prev: any, formData: FormData) {
  const v = validateSchema(formData, schema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { userId, ...data } = v.data;
  /** 
  const brewery = await prisma.brewery.update({
    where: { id: data.id },
    data,
  });
*/

  redirect(`/brewery`);
}
