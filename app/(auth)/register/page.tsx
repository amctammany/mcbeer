import { TopBar } from "@/components/TopBar/TopBar";
import { RegisterForm } from "./RegisterForm";

export default async function SignUpPage() {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Sign Up" }]}></TopBar>
      <RegisterForm />
    </div>
  );
}
