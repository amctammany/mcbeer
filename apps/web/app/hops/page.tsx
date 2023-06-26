import { mcfetch } from "@/lib/mcfetch";
import HopsList from "./HopsList";
import { Metadata } from "next";
import { HopIngredient } from "@mcbeer/types";

export const metadata: Metadata = {
  title: "Hops List",
};

export default async function Page() {
  const { data } = await mcfetch<{ hops: [HopIngredient] }>({
    query: `query GetHops {
        hops {
        _id
        urlString
        slug
        name
        }
    }`,
  });
  return <HopsList hops={data?.hops || []} />;
}
