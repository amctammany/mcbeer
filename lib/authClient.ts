import { createAuthClient } from "better-auth/react";
import {
  customSessionClient,
  inferAdditionalFields,
  oneTapClient,
  usernameClient,
} from "better-auth/client/plugins";
import type { auth } from "@/auth";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",

  plugins: [customSessionClient<typeof auth>(), usernameClient()],
});
