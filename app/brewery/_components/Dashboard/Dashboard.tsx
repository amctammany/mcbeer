import Prop from "@/components/Prop/Prop";
import { Brewery, BreweryUser } from "@/generated/prisma/browser";
import { Suspense } from "react";

export type DashboardProps = {
  user: BreweryUser & { brewery: Brewery };
};
export function Dashboard({ user }: DashboardProps) {
  const brewery = user.brewery;
  return (
    <Suspense fallback={<div>Loading brewery dashboard...</div>}>
      <div>
        Brewery Dashboard
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
