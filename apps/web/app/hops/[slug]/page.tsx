import { HopDisplay } from "./HopDisplay";
import { Metadata, ResolvingMetadata } from "next";
import { HopIngredient } from "@mcbeer/types";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
export const revalidate = 5;
const query = gql`
  query GetHop($slug: String) {
    hop(filter: { slug: $slug }) {
      _id
      urlString
      slug
      name
      country
      description
      alphaRange
      betaRange
    }
  }
`;

export async function generateMetadata(
  { params: { slug } }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query({
    query,
    variables: {
      slug,
    },
  });
  return {
    title: `Hop: ${data.hop.name}`,
  };
}
type PageProps = {
  params: { slug: string };
};
export default async function Page({ params: { slug } }: PageProps) {
  const client = getClient();
  const { data } = await client.query<{ hop: HopIngredient }>({ query });
  return <HopDisplay hop={data.hop} />;
}
