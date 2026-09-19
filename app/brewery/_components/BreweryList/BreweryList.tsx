import { Brewery } from "@/generated/prisma/browser";
import { BreweryListItem } from "./BreweryListItem";

export type BreweryListProps = { breweries: Brewery[] };
export function BreweryList({ breweries }: BreweryListProps) {
  return (
    <div>
      <h1>Brewery List</h1>
      <ul>
        {breweries.map((brewery) => (
          <BreweryListItem key={brewery.id} brewery={brewery} />
        ))}
      </ul>
    </div>
  );
}
