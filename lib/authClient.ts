import { createAuthClient } from "better-auth/react";
import {
  inferAdditionalFields,
  oneTapClient,
  usernameClient,
} from "better-auth/client/plugins";
import { auth } from "@/auth";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  plugins: [
    usernameClient(),
    inferAdditionalFields<typeof auth>(),

    oneTapClient({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      promptOptions: {
        maxAttempts: 1,
      },
    }),
  ],
});
export const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
