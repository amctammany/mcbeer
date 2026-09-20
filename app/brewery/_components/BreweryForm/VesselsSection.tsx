import List from "@/components/Form/List/List";
import Section from "@/components/Section";
import { ModalContext } from "@/contexts/ModalContext";
import {
  AdjustedBreweryType,
  BreweryInputType,
  BreweryType,
} from "@/types/Brewery";
import { useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import VesselItem from "./VesselItem";
import { VesselsSectionToolbar } from "./VesselsSectionToolbar";

export default function VesselsSection({ src }: { src?: AdjustedBreweryType }) {
  const { getValues, watch, control } = useFormContext<AdjustedBreweryType>();

  const vesselsArray = useFieldArray({
    name: "vessels",
    control,
    keyName: "_id",
  });
  const watchVessels = watch("vessels", []);

  const _vessels = vesselsArray.fields.map((field, index) => {
    return {
      ...field,
      ...watchVessels[index],
    };
  });
  const { handleDialogOpen } = useContext(ModalContext);

  const handleClick: (d: any) => React.MouseEventHandler<HTMLDivElement> = (
    d,
  ) => handleDialogOpen(d);
  return (
    <Section
      title="Vessels"
      actions={<VesselsSectionToolbar append={vesselsArray.append} />}
    >
      <List className="min-h-40 flex flex-col  w-full" size="small">
        {_vessels.map((i: any, index: any) => (
          <VesselItem
            key={i._id}
            index={index}
            src={i}
            onClick={handleClick({ type: "vessel", id: i._id, index })}
            actions={{ remove: () => vesselsArray.remove(index) }}
          />
        ))}
      </List>
    </Section>
  );
}
