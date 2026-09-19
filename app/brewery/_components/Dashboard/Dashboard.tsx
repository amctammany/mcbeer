import IconButton from "@/components/Button/IconButton";
import Prop from "@/components/Prop/Prop";
import { TopBar } from "@/components/TopBar/TopBar";
import { BreweryType, BreweryUserType } from "@/types/Brewery";
import { EditIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export type DashboardProps = {
  user: BreweryUserType;
  src: BreweryType;
};
export function Dashboard({ src: brewery, user }: DashboardProps) {
  return (
    <div>
      <TopBar
        breadcrumbs={[{ title: "Brewery" }, { title: `${brewery.name}` }]}
      >
        <IconButton icon={EditIcon} href={`/brewery/${brewery.id}/edit`}>
          Edit Brewery
        </IconButton>
      </TopBar>
      <Link href={`/brewery/${brewery.id}/schedule`}>Schedule</Link>
      <Link href={`/brewery/${brewery.id}/inventory`}>Inventory</Link>
      <Prop label="Name" value={brewery.name} />
      <Prop label="Description" value={brewery.description} />
      <Prop label="Address" value={brewery.address} />
      <Prop label="City" value={brewery.city} />
      <Prop label="State" value={brewery.state} />
      <Prop label="Country" value={brewery.country} />
    </div>
  );
}
export default Dashboard;
