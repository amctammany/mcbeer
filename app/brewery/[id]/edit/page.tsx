import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import { fetchBreweryUser } from "@/app/brewery/queries";
import { cachedAuth } from "@/lib/verifySession";
import BreweryEditor from "@/app/brewery/_components/BreweryEditor/BreweryEditor";
import { updateBrewery } from "@/app/brewery/actions";
export type BreweryPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BreweryEditorPage({ params }: BreweryPageProps) {
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
  if (!user.brewery) throw new Error("Brewery not found");
  const brewery = { ...user.brewery, userId: user.userId };
  return <BreweryEditor brewery={brewery} action={updateBrewery} />;
}
