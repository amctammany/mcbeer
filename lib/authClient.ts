import { createAuthClient } from "better-auth/react";
import {
  inferAdditionalFields,
  oneTapClient,
  usernameClient,
} from "better-auth/client/plugins";
import { auth } from "@/auth";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  plugins: [usernameClient(), inferAdditionalFields<typeof auth>()],
});
