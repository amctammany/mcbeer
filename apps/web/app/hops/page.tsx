import HopsList from "./HopsList";
import { Metadata } from "next";
import { HopIngredient } from "@mcbeer/types";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

export const revalidate = 5;
const query = gql`
  query GetHops {
    hops {
      _id
      urlString
      slug
      name
    }
  }
`;

export const metadata: Metadata = {
  title: "Hops List",
};

export default async function Page() {
  const client = getClient();
  const { data } = await client.query<{ hops: [HopIngredient] }>({ query });
  return <HopsList hops={data?.hops || []} />;
}
