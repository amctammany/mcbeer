import { User, UserPreferences } from "@/generated/prisma/client";

export type UserPreferencesType = Partial<
  Omit<
    UserPreferences,
    | "id"
    | "userId"
    | "theme"
    | "language"
    | "timezone"
    | "updatedAt"
    | "createdAt"
  >
>;
export type BaseUser = Pick<User, "id" | "name" | "role" | "username">;

export interface ExtendedUser extends BaseUser {
  UserPreferences: UserPreferencesType;
}
