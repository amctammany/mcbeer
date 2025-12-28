import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/authClient"; //import the auth client
import { cn } from "@/lib/utils";
import { SignUpForm } from "./SignUpForm";

export default async function SignUpPage() {
  return <SignUpForm />;
}
