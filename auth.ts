/**
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
*/
import { betterAuth, email } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { oneTap, username } from "better-auth/plugins";
import { prisma } from "./lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  databaseHooks: {
    user: {
      create: {
        after: async (user: any) => {
          console.log(user);
          await prisma.userPreferences.create({
            data: {
              userId: user.id,
            },
          });
        },
      },
    },
  },
  user: {},
  baseURL: process.env.NEXTBASE_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    google: {
      enabled: true,
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    },
  },
  plugins: [username()],
});
