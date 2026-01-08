import { TopBar } from "@/components/TopBar/TopBar";
import { LoginForm } from "./LoginForm";
import { LinkButton } from "@/components/Button/LinkButton";

export type LoginPageProps = {
  searchParams: Promise<{ redirect_url: string }>;
};
export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirect_url } = await searchParams;

  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Sign In" }]}></TopBar>
      <div className="h-screen w-full flex justify-center align-middle items-center text-center">
        <div className="w-xl bg-amber-50 border-2 rounded-md py-20 m-auto flex justify-center align-middle items-center text-center flex-col">
          <h4 className="text-2xl font-bold">Login</h4>

          <LinkButton href="/register">Register</LinkButton>
          <LoginForm redirectUrl={redirect_url} />
        </div>
      </div>
    </div>
  );
}
