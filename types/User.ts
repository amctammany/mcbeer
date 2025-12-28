import { User } from "@/generated/prisma/client";

export type BaseUser = Pick<User, "id" | "name" | "role" | "username">;
