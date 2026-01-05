import AmountField from "@/components/Form/AmountField";
import { Input } from "@/components/Form/Input";
import { SelectField } from "@/components/Form/SelectField";
import { Button } from "@/components/ui/button";
import { $Enums } from "@/generated/prisma/browser";
import { MashProfileType, MashStepType } from "@/types/Profile";
import { cx } from "class-variance-authority";
import { ArrowDown, ArrowUp, X } from "lucide-react";
import React from "react";
import { Control } from "react-hook-form";
export const Unit = (text?: string) =>
  function UnitComp({ className, ...props }: React.ComponentProps<"span">) {
    return (
      <span className={cx("text-sm font-mono", className)} {...props}>
        {text}
      </span>
    );
  };
export type MashProfileStepFieldProps = {
  src: MashStepType;
  index: number;
  remove: any;
  swap: any;
  length: number;
  control: Control<MashProfileType>;
};
export default function MashProfileStepField({
  src,
  length,
  index,
  control,
  swap,
  remove,
}: MashProfileStepFieldProps) {
  return (
    <li className="list-item" key={index}>
      <div className="flex">
        <div className="flex flex-col justify-evenly items-center bg-secondary">
          <div className="text-lg">{index}</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              swap(index, index - 1);
            }}
            disabled={index < 1}
          >
            <ArrowUp />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              remove(index);
            }}
          >
            <X />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              swap(index, index + 1);
            }}
            disabled={index > length - 1}
          >
            <ArrowDown />
          </Button>
        </div>
        <div className="flex-grow grid grid-cols-1 lg:grid-rows-2 justify-center items-center">
          <div className="flex flex-col lg:flex-row *:p-1">
            <input type="hidden" name={`steps.${index}.index`} value={index} />
            <input type="hidden" name={`steps.${index}.id`} />
            <SelectField
              control={control}
              label="Type"
              name={`steps.${index}.type`}
              options={$Enums.MashStepType}
            />
            <Input
              control={control}
              className="flex-grow"
              name={`steps.${index}.name`}
              variant="inline"
              label="Name"
            />
          </div>
          <div className="flex flex-col lg:flex-row *:p-1">
            <AmountField
              name={`steps.${index}.temperature`}
              type="number"
              amountType="temperature"
              //              AppendIcon={Unit("°F")}
              label="Temp"
            />
            <Input
              variant="inline"
              control={control}
              name={`steps.${index}.time`}
              type="number"
              label="Time"
            />
            <Input
              control={control}
              variant="inline"
              name={`steps.${index}.rampTime`}
              type="number"
              label="Ramp Time"
            />
          </div>
        </div>
      </div>
    </li>
  );
}
