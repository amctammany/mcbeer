import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import {
  AdjustedEquipmentProfileType,
  BaseEquipmentProfile,
} from "@/types/Profile";
import { Droplet } from "lucide-react";
import Link from "next/link";
import React from "react";

export type EquipmentProfileListItemProps = {
  profile: BaseEquipmentProfile;
};
export default function EquipmentProfileListItem({
  profile,
}: EquipmentProfileListItemProps) {
  return (
    <Link href={`/equipment/${profile.slug}`}>
      <div className="list-item py-2 group hover:bg-slate-200">
        <div className="flex">
          <div className="shrink p-2 mx-2 my-auto ">
            <Droplet />
          </div>
          <div className="grow flex flex-col gap-2">
            <span className="text-xl group-hover:underline">
              {profile.name}
            </span>
            <span className="text-md">{profile.description}</span>
          </div>
          <div className="grow flex flex-row">
            <AmountProp
              name="brewEfficiency"
              label="Brew Efficiency"
              value={profile.brewEfficiency}
            />

            <AmountProp
              name="batchVolume"
              label="Batch Volume"
              value={profile.batchVolume}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
