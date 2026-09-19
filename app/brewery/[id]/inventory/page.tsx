import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import { fetchBreweryUser } from "@/app/brewery/queries";
import { cachedAuth } from "@/lib/verifySession";
import BreweryEditor from "@/app/brewery/_components/BreweryEditor/BreweryEditor";
import { updateBrewery, updateBreweryInventory } from "@/app/brewery/actions";
import BreweryInventory from "@/app/brewery/_components/BreweryInventory/BreweryInventory";
export type BreweryPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BreweryInventoryPage({
  params,
}: BreweryPageProps) {
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
  return <BreweryInventory src={brewery} action={updateBreweryInventory} />;
}
