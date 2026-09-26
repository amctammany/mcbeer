import Prop from "@/components/Prop/Prop";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import Link from "next/link";
import FermentationStepListItem from "./FermentationStepListItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FermentationChart from "./FermentationChart";
import Section from "@/components/Section";

export type FermentationProfileDisplayProps = {
  profile: AdjustedFermentationProfileType; //UnitValues<FermentationProfileType, UnitMask<FermentationProfileType>>;
};
export default function FermentationProfileDisplay({
  profile,
}: FermentationProfileDisplayProps) {
  return (
    <div className="max-w-4xl grid  lg:grid-cols-2 gap-2 mx-auto my-2 ">
      <Section title="Details" className="">
        <Prop label="Name" value={profile.name} />
        <Prop label="Author" value={profile.owner?.name} />
        <Prop
          label="Forked From"
          value={
            <Link
              className="underline"
              href={`/fermentation/${profile.origin?.slug}`}
            >
              {profile.origin?.name}
            </Link>
          }
        />
        <Prop label="Description" value={profile.description} />
      </Section>
      <div className="grid gap-2">
        <Section title="Steps">
          <div className="*:even:bg-blue-200/15 mb-2">
            {profile.steps?.map((step) => (
              <FermentationStepListItem key={step.id} src={step} />
            ))}
          </div>
        </Section>
        <Section title="Chart">
          <FermentationChart src={profile} />
        </Section>
      </div>
    </div>
  );
}
