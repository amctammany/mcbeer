import IconButton from "@/components/Button/IconButton";
import Prop from "@/components/Prop/Prop";
import { TopBar } from "@/components/TopBar/TopBar";
import { Brewery, BreweryUser } from "@/generated/prisma/browser";
import { EditIcon } from "lucide-react";
import { Suspense } from "react";

export type DashboardProps = {
  user: BreweryUser & { brewery: Brewery };
};
export function Dashboard({ user }: DashboardProps) {
  const brewery = user.brewery;
  return (
    <Suspense fallback={<div>Loading brewery dashboard...</div>}>
      <div>
        <TopBar breadcrumbs={[{ title: "Brewery" }, { title: brewery.name }]}>
          <IconButton icon={EditIcon} href={`/brewery/${brewery.id}/edit`}>
            Edit Brewery
          </IconButton>
        </TopBar>
        <Prop label="Name" value={brewery.name} />
        <Prop label="Description" value={brewery.description} />
        <Prop label="Address" value={brewery.address} />
        <Prop label="City" value={brewery.city} />
        <Prop label="State" value={brewery.state} />
        <Prop label="Country" value={brewery.country} />
      </div>
    </Suspense>
  );
}
export default Dashboard;
