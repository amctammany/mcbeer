export function BreweryListItem({ brewery }: { brewery: Brewery }) {
  return (
    <li>
      <a href={`/brewery/${brewery.id}`}>{brewery.name}</a>
    </li>
  );
}
