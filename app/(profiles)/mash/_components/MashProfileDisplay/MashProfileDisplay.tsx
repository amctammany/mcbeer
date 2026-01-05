import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { MashProfileType } from "@/types/Profile";
import Link from "next/link";

export type MashProfileDisplayProps = {
  profile: MashProfileType; //UnitValues<MashProfileType, UnitMask<MashProfileType>>;
};
export default function MashProfileDisplay({
  profile,
}: MashProfileDisplayProps) {
  return (
    <div className="max-w-2xl grid  mx-auto">
      <div className="">
        <Prop label="Name" value={profile.name} />
        <Prop label="Author" value={profile.owner?.name} />
        <Prop
          label="Forked From"
          value={
            <Link className="underline" href={`/mash/${profile.origin?.slug}`}>
              {profile.origin?.name}
            </Link>
          }
        />
        <Prop label="Description" value={profile.description} />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-3">
        {JSON.stringify(profile.steps)}
      </div>
    </div>
  );
}
