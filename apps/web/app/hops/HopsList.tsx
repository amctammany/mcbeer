import { HopIngredient } from "@mcbeer/types";
import { Header } from "@mcbeer/ui";
import Link from "next/link";

export type HopsListProps = {
  hops: [HopIngredient];
};
export default function HopsList({ hops }: HopsListProps) {
  return (
    <>
      <Header text="Hops" />
      <ul>
        {(hops || []).map((hop) => (
          <li key={hop._id}>
            <Link href={hop.urlString || ""}>{hop.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
