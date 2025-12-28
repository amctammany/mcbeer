import { auth } from "@/auth";
import { UserPreferencesType } from "@/contexts/UserPreferencesContext";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function getPreferences() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user?.id) {
    return {} as Partial<UserPreferencesType>;
  }
  return getUserPreferences(session.user.id)!;
}
export async function getUserPreferences(userId: string) {
  const user = await prisma.userPreferences.findFirst({ where: { userId } });
  return (user || {}) as Partial<UserPreferencesType>;
}
