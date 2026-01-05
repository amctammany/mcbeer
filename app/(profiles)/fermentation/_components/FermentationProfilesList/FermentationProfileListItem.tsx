import { BaseFermentationProfile } from "@/types/Profile";
import { Droplet } from "lucide-react";
import Link from "next/link";
import React from "react";

export type FermentationProfileListItemProps = {
  profile: BaseFermentationProfile;
};
export default function FermentationProfileListItem({
  profile,
}: FermentationProfileListItemProps) {
  return (
    <Link href={`/fermentation/${profile.slug}`}>
      <div className="list-item py-2 group hover:bg-slate-200">
        <div className="inline-flex">
          <div className="shrink p-2 mx-2 my-auto ">
            <Droplet />
          </div>
          <div className="grid">
            <span className="text-xl group-hover:underline">
              {profile.name}
            </span>
            <span className="text-md">{profile.description}</span>
            <span className="text-sm">Ions</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
