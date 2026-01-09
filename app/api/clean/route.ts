import { prisma } from "@/lib/prisma";
import { revalidateTag, updateTag } from "next/cache";

const corrections = [
  [" Russia", "Russia"],
  [" France", "France"],
  [" Slovenia", "Slovenia"],
  [" US", "US"],
  [" UK", "UK"],
  ["U.S.", "US"],
  ["United Kingdom", "UK"],
  ["Germnay", "Germany"],
];
export async function GET() {
  "use server";

  const res = await Promise.all(
    corrections
      .map(async ([incorrect, correct]) => {
        const a = await prisma.fermentable.updateManyAndReturn({
          where: { country: incorrect },
          data: { country: correct },
        });
        const b = await prisma.hop.updateManyAndReturn({
          where: { country: incorrect },
          data: { country: correct },
        });
        return [a, b];
      })
      .flat(2)
  );
  revalidateTag("countries", "max");
  return new Response("Data cleaned");
}
