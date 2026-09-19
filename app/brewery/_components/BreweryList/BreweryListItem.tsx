import { BreweryType } from "@/types/Brewery";

export function BreweryListItem({ brewery }: { brewery: BreweryType }) {
  return (
    <li>
      <a href={`/brewery/${brewery.id}`}>{brewery.name}</a>
    </li>
  );
}
