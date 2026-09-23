import { auth } from "@/auth";
import { notFound, unauthorized } from "next/navigation";
import { Dashboard } from "@/app/brewery/_components/Dashboard/Dashboard";
import { headers } from "next/headers";
import { fetchBreweryUser } from "../queries";
import { cachedAuth } from "@/lib/verifySession";
import { getPreferences } from "@/app/admin/queries";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { BreweryMask } from "@/lib/Converter/Masks";
import { AdjustedBreweryType } from "@/types/Brewery";
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
  const prefs = await getPreferences();
  // console.log({ id, recipe });
  const brewery = user.brewery;
  if (!brewery) notFound();

  const adjusted = adjustUnits({
    src: brewery,
    mask: BreweryMask,
    prefs,
    precision: 4,
    dir: true,
    inline: false,
  }) as AdjustedBreweryType;
  // console.log(adjusted);
  return <Dashboard user={user} src={adjusted} />;
}
