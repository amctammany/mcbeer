import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import {
  AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import Link from "next/link";

export type EquipmentProfileDisplayProps = {
  profile: EquipmentProfileType; //UnitValues<EquipmentProfileType, UnitMask<EquipmentProfileType>>;
};
export default function EquipmentProfileDisplay({
  profile,
}: EquipmentProfileDisplayProps) {
  return (
    <div className="max-w-2xl grid grid-cols-2 mx-auto m-3">
      <div className="col-span-2 m-2 ">
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
              <AmountProp
                label="Boil Time"
                value={profile.boilTime}
                name="boilTime"
              />
              <AmountProp
                label="Preboil Volume "
                name="preboilVolume"
                value={profile.preboilVolume}
              />
              <AmountProp
                name="boilVolume"
                label="Boil Volume "
                value={profile.boilVolume}
              />
              <AmountProp
                name="batchVolume"
                label="Batch Size"
                value={profile.batchVolume}
              />
              <AmountProp
                name="mashLoss"
                label="Mash Loss"
                value={profile.mashLoss}
              />
              <AmountProp
                name="trubLoss"
                label="Trub Loss"
                precision={2}
                value={profile.trubLoss}
              />
              <AmountProp
                name="fermenterLoss"
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
              name="mashEfficiency"
              label="Mash Efficiency"
              value={profile.mashEfficiency}
              unit="%"
            />
            <AmountProp
              label="Brew Efficiency"
              name="brewEfficiency"
              value={profile.brewEfficiency}
              unit="%"
            />
          </ItemContent>
        </Item>
      </div>
    </div>
  );
}
