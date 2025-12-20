import type { DefaultSession, NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { User, UserRoles } from "./generated/prisma/client";

const PAdapter = (p: any) => {
  const Pa = PrismaAdapter(p);
  return {
    ...Pa,
    createUser({ id, ...data }: User) {
      return Pa.createUser!({
        ...data,
        username: data.name ?? data.email,
      } as User);
    },
  };
};
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    role: UserRoles;
    user: {
      /** The user's postal address. */
      username: string;
      recipeCounter: number;
      batchCounter: number;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  secret: "secret",
  adapter: PAdapter(prisma as any),
  events: {
    createUser: async ({ user }) => {
      // When a user is created, also create a UserPreferences record
      if (!user.id) return;
      await prisma.userPreferences.create({
        data: {
          userId: user.id,
          theme: "system",
        },
      });
    },
  },
  providers: [GoogleProvider],
  //callbacks: {},
  session: { strategy: "jwt" },
  callbacks: {
    signIn: async ({ user, ...rest }) => {
      console.log(user, rest);
      return true;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      //session.accessToken = token.accessToken;
      //session.user = token.user as any;
      session.user.id = token.sub!;
      session.role = token.role as UserRoles;

      return session;
    },
    async jwt({ token }) {
      const currentUser = await prisma.user.findFirst({
        where: {
          id: token.sub,
        },
      });
      if (currentUser) {
        token.user = currentUser;
        token.role = currentUser.role;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
