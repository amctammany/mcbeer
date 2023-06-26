import { Button, Header } from "@mcbeer/ui";
import Link from "next/link";
import { mcfetch } from "@/lib/mcfetch";

export default async function Page() {
  const { data } = await mcfetch({
    query: `query GetHops {
        hops {
        _id
        urlString
        slug
        name
        }
    }`,
  });
  return (
    <>
      <Header text="Hops" />
      <Button />
      <ul>
        {(data?.hops || []).map((hop) => (
          <li key={hop._id}>
            <Link href={hop.urlString || ""}>{hop.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
