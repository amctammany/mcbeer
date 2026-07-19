import { TopBar } from "@/components/TopBar/TopBar";
import { LoginForm } from "./LoginForm";
import { LinkButton } from "@/components/Button/LinkButton";
import { Suspense } from "react";
import Login from "./Login";

export type LoginPageProps = {
  searchParams: Promise<{ redirect_url: string }>;
};
export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirect_url } = await searchParams;

  return <Login redirectUrl={redirect_url} />;
}
