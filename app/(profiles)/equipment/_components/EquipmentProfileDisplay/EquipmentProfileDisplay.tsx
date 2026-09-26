import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import Section from "@/components/Section";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import {
  AdjustedEquipmentProfileType,
  // AdjustedEquipmentProfileType,
  EquipmentProfileType,
} from "@/types/Profile";
import Link from "next/link";

export type EquipmentProfileDisplayProps = {
  profile: AdjustedEquipmentProfileType; //UnitValues<EquipmentProfileType, UnitMask<EquipmentProfileType>>;
};
export default function EquipmentProfileDisplay({
  profile,
}: EquipmentProfileDisplayProps) {
  return (
    <div className="mx-auto grid lg:grid-cols-2 gap-1 max-w-4xl ">
      <Section title="Details" className="lg:col-span-2">
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
      </Section>
      <Section title="Volumes">
        <div className="grid lg:grid-cols-2">
          <AmountProp
            label="Boil Time"
            variant="inline"
            value={profile.boilTime}
            name="boilTime"
          />
          <AmountProp
            label="Preboil Volume "
            name="preboilVolume"
            variant="inline"
            value={profile.preboilVolume}
          />
          <AmountProp
            name="boilVolume"
            label="Boil Volume "
            variant="inline"
            value={profile.boilVolume}
          />
          <AmountProp
            name="batchVolume"
            label="Batch Size"
            value={profile.batchVolume}
            variant="inline"
          />
          <AmountProp
            name="mashLoss"
            variant="inline"
            label="Mash Loss"
            value={profile.mashLoss}
          />
          <AmountProp
            name="trubLoss"
            variant="inline"
            label="Trub Loss"
            precision={2}
            value={profile.trubLoss}
          />
          <AmountProp
            name="fermenterLoss"
            variant="inline"
            label="Fermenter Loss"
            value={profile.fermenterLoss}
          />
        </div>
      </Section>

      <Section title="Efficiencies">
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
      </Section>
    </div>
  );
}
