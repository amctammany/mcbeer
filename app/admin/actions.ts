"use server";

import { validateSchema } from "@/lib/validateSchema";
import {
  MassSystem,
  UserColorPreference,
  UserGravityPreference,
  UserMassPreference,
  UserPressurePreference,
  UserTemperaturePreference,
  UserVolumePreference,
} from "@/generated/prisma/client";
import { redirect } from "next/navigation";
import z from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

const schema = zfd.formData({
  //userId: zfd.text(),
  id: zfd.text(),
  name: zfd.text(),
  username: zfd.text(),
  email: zfd.text(),
  UserPreferences: z.object({
    id: zfd.numeric().optional(),
    userId: zfd.text(),
    massSystem: z.enum(MassSystem).default("US"),
    temperature: z.enum(UserTemperaturePreference).default("F"),
    volume: z.enum(UserVolumePreference).default("gal"),
    pressure: z.enum(UserPressurePreference).default("PSI"),
    color: z.enum(UserColorPreference).default("L"),
    gravity: z.enum(UserGravityPreference).default("SG"),
    mass: z.enum(UserMassPreference).default("Lb"),
    hopMass: z.enum(UserMassPreference).default("Oz"),
    fermentableMass: z.enum(UserMassPreference).default("LbOz"),
  }),
});
export async function updateUserSettings(prev: any, formData: FormData) {
  const v = validateSchema(formData, schema);
  if (v.errors) return v;
  if (!v.success) {
    return Promise.resolve(v);
  }
  const { UserPreferences, ...data } = v.data;
  const res = Promise.all([
    prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    }),
    prisma.userPreferences.update({
      where: { userId: UserPreferences.userId },
      data: UserPreferences,
    }),
  ]);
  return redirect("/admin");
  //  return { success: true, data: res };
}

export const signIn = async () => {
  const res = await auth.api.signInSocial({
    body: {
      provider: "google",
      callbackURL: "/admin",
    },
  });
};
