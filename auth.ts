/**
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
*/
import { betterAuth, BetterAuthOptions, email } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { customSession, oneTap, username } from "better-auth/plugins";
import { prisma } from "./lib/prisma";
import { inferAdditionalFields } from "better-auth/client/plugins";
console.log(process.env.BETTER_AUTH_URL, "BETTER_AUTH_URL");

const options = {
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
  user: {
    additionalFields: {
      role: {
        type: ["USER", "ADMIN", "SUPERUSER"],
        defaultValue: "USER",
      },
    },
  },
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
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
} satisfies BetterAuthOptions;
export const auth = betterAuth({
  ...options,

  plugins: [
    ...(options.plugins || []),
    customSession(async ({ session, user }) => {
      console.log("custom session", session, user);
      return {
        session: { ...session, role: user.role },
        user,
      };
    }, options),
  ],
});
