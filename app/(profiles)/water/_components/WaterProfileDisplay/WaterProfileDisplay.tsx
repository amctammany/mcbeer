import { Ca2, Cl, HCO3, Mg2, Na, SO4 } from "@/components/Elements";
import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { WaterProfileType } from "@/types/Profile";
import Link from "next/link";

export type WaterProfileDisplayProps = {
  profile: WaterProfileType; //UnitValues<WaterProfileType, UnitMask<WaterProfileType>>;
};
export default function WaterProfileDisplay({
  profile,
}: WaterProfileDisplayProps) {
  return (
    <div className="max-w-2xl grid  mx-auto">
      <div className="">
        <Prop label="Name" value={profile.name} />
        <Prop label="Author" value={profile.owner?.name} />
        <Prop
          label="Forked From"
          value={
            <Link className="underline" href={`/water/${profile.origin?.slug}`}>
              {profile.origin?.name}
            </Link>
          }
        />
        <Prop label="Description" value={profile.description} />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-3">
        <Prop
          variant="outline"
          unit="ppm"
          label={<Ca2 />}
          value={profile.calcium}
        />
        <Prop
          variant="outline"
          unit="ppm"
          label={<Na />}
          value={profile.sodium}
        />
        <Prop
          variant="outline"
          unit="ppm"
          label={<Mg2 />}
          value={profile.magnesium}
        />
        <Prop
          variant="outline"
          unit="ppm"
          label={<Cl />}
          value={profile.chloride}
        />
        <Prop
          variant="outline"
          unit="ppm"
          label={<SO4 />}
          value={profile.sulfate}
        />
        <Prop
          variant="outline"
          unit="ppm"
          label={<HCO3 />}
          value={profile.bicarbonate}
        />
      </div>
    </div>
  );
}
