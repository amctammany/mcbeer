import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import { Dashboard } from "@/app/brewery/_components/Dashboard/Dashboard";
import { headers } from "next/headers";
import { fetchBreweryUser } from "../queries";
import { cachedAuth } from "@/lib/verifySession";
export type BreweryPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BreweryPage({ params }: BreweryPageProps) {
  const { id: breweryId } = await params;
  const session = await cachedAuth();
  // const asession = await auth.api.getSession({
  //   headers: await headers(), // you need to pass the headers object.
  // });
  if (!session?.user) unauthorized();
  const user = await fetchBreweryUser(breweryId, session.user.id);
  if (!user) {
    throw new Error("User not found");
  }
  return <Dashboard user={user} />;
}
