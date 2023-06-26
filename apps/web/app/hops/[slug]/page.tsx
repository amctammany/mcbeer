import { HopDisplay } from "./HopDisplay";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params: { slug } }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const data = await fetch("http://localhost:4000", {
    method: "POST",
    body: JSON.stringify({
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
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  // fetch data

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `Hop: ${data.data.hop.name}`,
  };
}
type PageProps = {
  params: { slug: string };
};
export default async function Page({ params: { slug } }: PageProps) {
  const data = await fetch("http://localhost:4000", {
    method: "POST",
    body: JSON.stringify({
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
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(data);
  return <HopDisplay hop={data.data.hop} />;
}
