import { AmountProp } from "@/components/Prop/AmountProp";
import Prop from "@/components/Prop/Prop";
import { Item, ItemContent, ItemHeader, ItemTitle } from "@/components/ui/item";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import Link from "next/link";
import FermentationStepListItem from "./FermentationStepListItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type FermentationProfileDisplayProps = {
  profile: AdjustedFermentationProfileType; //UnitValues<FermentationProfileType, UnitMask<FermentationProfileType>>;
};
export default function FermentationProfileDisplay({
  profile,
}: FermentationProfileDisplayProps) {
  return (
    <div className="max-w-2xl grid  mx-auto">
      <div className="">
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
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Steps</CardTitle>
        </CardHeader>
        <CardContent>
          {profile.steps?.map((step) => (
            <FermentationStepListItem key={step.id} src={step} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
