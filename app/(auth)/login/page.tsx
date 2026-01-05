import { LoginForm } from "./LoginForm";

export type LoginPageProps = {
  searchParams: Promise<{ redirect_url: string }>;
};
export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirect_url } = await searchParams;
  console.log(redirect_url);
  return <LoginForm redirectUrl={redirect_url} />;
}
