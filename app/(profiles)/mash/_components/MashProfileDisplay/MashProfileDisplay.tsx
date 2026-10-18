import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import { AdjustedMashProfileType, MashProfileType } from "@/types/Profile";
import Link from "next/link";
import MashStepListItem from "./MashStepListItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";

export type MashProfileDisplayProps = {
  profile: AdjustedMashProfileType; //UnitValues<MashProfileType, UnitMask<MashProfileType>>;
};
export default function MashProfileDisplay({
  profile,
}: MashProfileDisplayProps) {
  return (
    <div className="max-w-2xl grid p-2 mx-auto">
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
      <Section title="Steps">
        <div className="px-0">
          {profile.steps?.map((step) => (
            <MashStepListItem key={step.id} src={step} />
          ))}
        </div>
      </Section>
    </div>
  );
}
