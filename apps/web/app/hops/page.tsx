import { Button, Header } from "@mcbeer/ui";
import Link from "next/link";

export default async function Page() {
  const data = await fetch("http://localhost:4000", {
    method: "POST",
    body: JSON.stringify({
      query: `{
        hops {
        _id
        urlString
        slug
        name
        }
    }`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(data);
  return (
    <>
      <Header text="Hops" />
      <Button />
      <ul>
        {(data.data.hops || []).map((hop) => (
          <li key={hop._id}>
            <Link href={hop.urlString || ""}>{hop.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
