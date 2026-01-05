"use client";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { AdjustedMashProfileType, MashProfileType } from "@/types/Profile";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import MashProfileStepField from "./MashProfileStepField";

export function MashProfileStepsForm({ src }: { src: MashProfileType }) {
  const { register, control, watch } = useFormContext<MashProfileType>();
  const { fields, append, insert, swap, remove } = useFieldArray({
    control,
    name: "steps",
  });
  const watchFieldArray = watch("steps");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray?.[index],
    };
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Steps</CardTitle>
        <CardAction>
          <Button
            onClick={(e) => {
              e.preventDefault();
              append({
                index: fields.length + 1,
                mashProfileId: src.id,
                type: "infusion",
                time: 0,
                temperature: 0,
                rampTime: 0,
              });
              return false;
            }}
          >
            Add
          </Button>
        </CardAction>
      </CardHeader>
      <ul className="*:not-last:border-b-2">
        {controlledFields.map((step, index) => (
          <MashProfileStepField
            key={step.id}
            src={step}
            index={index}
            length={controlledFields.length - 1}
            control={control}
            swap={swap}
            remove={remove}
          />
        ))}
      </ul>
    </Card>
  );
}
