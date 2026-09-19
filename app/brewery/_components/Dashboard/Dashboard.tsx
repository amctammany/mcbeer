import IconButton from "@/components/Button/IconButton";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { TopBar } from "@/components/TopBar/TopBar";
import {
  AdjustedBreweryType,
  BreweryType,
  BreweryUserType,
} from "@/types/Brewery";
import { EditIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import VesselItem from "./VesselItem";

export type DashboardProps = {
  user: BreweryUserType;
  src: AdjustedBreweryType;
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

      <div className="grid grid-cols-2 *:p-4 *:border-2 *:m-4">
        <div className="*:py-1">
          <Link href={`/brewery/${brewery.id}/schedule`}>Schedule</Link>
          <Link href={`/brewery/${brewery.id}/inventory`}>Inventory</Link>
          <Prop label="Name" value={brewery.name} />
          <Prop label="Description" value={brewery.description} />
          <Prop label="Address" value={brewery.address} />
          <Prop label="City" value={brewery.city} />
          <Prop label="State" value={brewery.state} />
          <Prop label="Country" value={brewery.country} />
        </div>
        <div className="*:py-1">
          <Section title="Vessels">
            {brewery.vessels.map((vessel, index) => (
              <VesselItem key={vessel.id} src={vessel} index={index} />
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
