import { User, UserPreferences } from "@/generated/prisma/client";

export type UserPreferencesType = Partial<
  Omit<
    UserPreferences,
    "theme" | "language" | "timezone" | "updatedAt" | "createdAt"
  >
>;
export type BaseUser = Pick<User, "id" | "name" | "role" | "username">;

export interface ExtendedUser extends User {
  UserPreferences: UserPreferencesType | null;
}
