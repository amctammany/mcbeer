import { auth } from "@/auth";
import { notFound, unauthorized } from "next/navigation";
import { fetchBrewery } from "@/app/brewery/queries";
import { cachedAuth } from "@/lib/verifySession";
import BreweryEditor from "@/app/brewery/_components/BreweryEditor/BreweryEditor";
import { updateBrewery } from "@/app/brewery/actions";
import { BreweryInputType } from "@/types/Brewery";
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
  // console.log(brewery);
  const src = {
    ...brewery,
    userId: session.user.id,
    vessels: brewery.vessels ?? [],
  } as BreweryInputType;
  return <BreweryEditor src={src} action={updateBrewery} />;
}
