import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import { BreweryCreator } from "../_components/BreweryCreator/BreweryCreator";
import { prisma } from "@/lib/prisma";
import { Brewery } from "@/generated/prisma/client";
import { createBrewery } from "../actions";
import { auth } from "@/auth";
import { cachedAuth } from "@/lib/verifySession";
import { BreweryType } from "@/types/Brewery";

export default async function NewBreweryPage() {
  const session = await cachedAuth();

  if (!session?.user) unauthorized();
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if (!user) unauthorized();
  const brewery = { userId: user.id } as BreweryType & { userId: string };
  return <BreweryCreator src={brewery} action={createBrewery} />;
}
