"use server";
import { prisma } from "@/lib/prisma";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import z from "zod";
import { zfd } from "zod-form-data";

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
});
export async function createBrewery(prev: any, formData: FormData) {
  const v = validateSchema(formData, schema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { userId, ...data } = v.data;
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
  const brewery = await prisma.brewery.update({
    where: { id: data.id },
    data,
  });

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
