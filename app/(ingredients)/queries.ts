import { prisma } from "@/lib/prisma";
import { cacheTag } from "next/cache";

export async function getCountries() {
  "use cache";
  cacheTag("countries");

  const countries1: { country: string | null }[] = await prisma.hop.findMany({
    select: {
      country: true,
    },
    distinct: ["country"],
  });
  const countries: { country: string | null }[] =
    await prisma.fermentable.findMany({
      select: {
        country: true,
      },
      distinct: ["country"],
    });
  const uniq = countries1
    .concat(countries)
    .map((item: { country: string | null }) => item.country)
    .reduce<Set<string>>((acc, country) => {
      if (country && !acc.has(country)) {
        acc.add(country);
      }
      return acc;
    }, new Set<string>());
  return Array.from(uniq);
}
