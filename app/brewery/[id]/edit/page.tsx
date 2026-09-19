import { auth } from "@/auth";
import { notFound, unauthorized } from "next/navigation";
import { fetchBrewery } from "@/app/brewery/queries";
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
  const brewery = await fetchBrewery(breweryId);
  if (!brewery) notFound();
  // if (!user.brewery) throw new Error("Brewery not found");
  // const brewery = { ...user.brewery, userId: user.userId };
  console.log(brewery);
  return <BreweryEditor src={brewery} action={updateBrewery} />;
}
