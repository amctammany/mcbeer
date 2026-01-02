import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { AdjustedEquipmentProfileType } from "@/types/Profile";
import Link from "next/link";

export type EquipmentProfileDisplayProps = {
  profile: AdjustedEquipmentProfileType; //UnitValues<EquipmentProfileType, UnitMask<EquipmentProfileType>>;
};
export default function EquipmentProfileDisplay({
  profile,
}: EquipmentProfileDisplayProps) {
  return (
    <div className="max-w-2xl grid lg:grid-cols-2 mx-auto">
      <div className="col-span-2">
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
      </div>
      <div className="flex flex-col">
        <div className="grid">
          <Item variant="outline">
            <ItemHeader>
              <ItemTitle>Volumes</ItemTitle>
            </ItemHeader>
            <ItemContent>
              <AmountProp label="Boil Time" value={profile.boilTime} />
              <AmountProp
                label="Preboil Volume "
                value={profile.preboilVolume}
              />
              <AmountProp label="Boil Volume " value={profile.boilVolume} />
              <AmountProp label="Batch Size" value={profile.batchVolume} />
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
            </ItemContent>
          </Item>
        </div>
      </div>

      <div className="flex flex-col">
        <Item variant="outline">
          <ItemHeader>
            <ItemTitle>Efficiencies</ItemTitle>
          </ItemHeader>
          <ItemContent>
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
          </ItemContent>
        </Item>
      </div>
    </div>
  );
}
