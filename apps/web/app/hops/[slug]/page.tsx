import { Button, Header } from "@mcbeer/ui";
import Link from "next/link";
import { HopDisplay } from "./HopDisplay";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
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
