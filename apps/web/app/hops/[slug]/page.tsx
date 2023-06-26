import { HopDisplay } from "./HopDisplay";
import { Metadata, ResolvingMetadata } from "next";
import { mcfetch } from "@/lib/mcfetch";
import { HopIngredient } from "@mcbeer/types";

export async function generateMetadata(
  { params: { slug } }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await mcfetch<{ hop: HopIngredient }>({
    variables: {
      slug,
    },
    query: `
      query GetHop($slug: String) {
        hop(filter: {slug: $slug}) {
        _id
        urlString
        slug
        name
        country
        description
        alphaRange
        betaRange
        }
    }`,
  });
  return {
    title: `Hop: ${data.hop.name}`,
  };
}
type PageProps = {
  params: { slug: string };
};
export default async function Page({ params: { slug } }: PageProps) {
  const { data } = await mcfetch<{ hop: HopIngredient }>({
    variables: {
      slug,
    },
    query: `
      query GetHop($slug: String) {
        hop(filter: {slug: $slug}) {
        _id
        urlString
        slug
        name
        country
        description
        alphaRange
        betaRange
        }
    }`,
  });
  console.log(data);
  return <HopDisplay hop={data.hop} />;
}
