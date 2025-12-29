import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdjustedEquipmentProfileType } from "@/types/Profile";
import Link from "next/link";

export type EquipmentProfileDisplayProps = {
  profile: AdjustedEquipmentProfileType; //UnitValues<EquipmentProfileType, UnitMask<EquipmentProfileType>>;
};
export default function EquipmentProfileDisplay({
  profile,
}: EquipmentProfileDisplayProps) {
  return (
    <div>
      <Card className="m-1">
        <CardHeader className="border-b-4">
          <CardTitle>Equipment Profile</CardTitle>
        </CardHeader>
        <CardContent className="">
          <Prop label="Name" value={profile.name} />
          <Prop label="Author" value={profile.owner?.name} />
          <Prop
            label="Forked From"
            value={
              <Link
                className="underline"
                href={`/equipment/${profile.origin?.slug}`}
              >
                {profile.origin?.name}
              </Link>
            }
          />
          <Prop label="Description" value={profile.description} />
          <div className="grid md:grid-cols-2">
            <div>
              <AmountProp label="Boil Time" value={profile.boilTime} />
              <AmountProp label="Batch Size" value={profile.batchVolume} />
              <AmountProp
                label="Mash Efficiency"
                value={profile.mashEfficiency}
                unit="%"
              />
              <AmountProp
                label="Brew Efficiency"
                value={profile.brewEfficiency}
                unit="%"
              />
            </div>
            <div>
              <Prop label="Boiloff Rate" value={profile.boilOffRate} />
              <AmountProp label="Mash Loss" value={profile.mashLoss} />
              <AmountProp
                label="Trub Loss"
                precision={2}
                value={profile.trubLoss}
              />
              <AmountProp
                label="Fermenter Loss"
                value={profile.fermenterLoss}
              />
            </div>
            <div>
              <AmountProp
                label="Fermenter Loss"
                value={profile.fermenterLoss}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
