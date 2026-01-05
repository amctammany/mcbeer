"use client";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AdjustedFermentationProfileType,
  FermentationProfileType,
} from "@/types/Profile";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FermentationProfileStepField from "./FermentationProfileStepField";

export function FermentationProfileStepsForm({
  src,
}: {
  src: AdjustedFermentationProfileType;
}) {
  const { register, control, watch } =
    useFormContext<FermentationProfileType>();
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
                type: "primary",
                fermentationProfileId: src.id,
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
          <FermentationProfileStepField
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
