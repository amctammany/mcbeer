import { cachedAuth, verifySession } from "@/lib/verifySession";
import { unauthorized } from "next/navigation";
import { fetchUserBreweries } from "./queries";
import { BreweryList } from "./_components/BreweryList/BreweryList";
import { headers } from "next/headers";
import { auth } from "@/auth";

export default async function BreweryListPage() {
  const session = await cachedAuth();
  if (!session?.user) unauthorized();
  const breweries = await fetchUserBreweries(session.user.id);

  return <BreweryList breweries={breweries} />;
}
