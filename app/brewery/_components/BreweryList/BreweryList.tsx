import { Brewery } from "@/generated/prisma/browser";
import { BreweryListItem } from "./BreweryListItem";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
import IconButton from "@/components/Button/IconButton";
import { PlusIcon } from "lucide-react";

export type BreweryListProps = { breweries: Brewery[] };
export function BreweryList({ breweries }: BreweryListProps) {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Brewery" }]}>
        <IconButton icon={PlusIcon} href="/brewery/new">
          New Brewery
        </IconButton>
      </TopBar>
      <h1>Brewery List</h1>
      <ul>
        {breweries.map((brewery) => (
          <BreweryListItem key={brewery.id} brewery={brewery} />
        ))}
      </ul>
    </div>
  );
}
