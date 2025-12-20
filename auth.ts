import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
console.log(
  "Auth Config:",
  process.env.AUTH_GOOGLE_ID,
  process.env.AUTH_GOOGLE_SECRET
);

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
