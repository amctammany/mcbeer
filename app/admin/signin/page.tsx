import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/authClient"; //import the auth client
import { cn } from "@/lib/utils";
import SignInForm from "./SignInForm";

export default async function SignInPage() {
  const signIn = async () => {
    "use server";
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return <SignInForm signIn={signIn} />;
}
