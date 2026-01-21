import { RevisionContext } from "@/contexts/RevisionContext";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import React, { ComponentProps, useCallback, useContext } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import {
  FieldGroup,
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "../ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "../ui/input-group";
import { Slider } from "../ui/slider";

export type RangeFieldProps<T extends FieldValues> = {
  className?: string;
  control?: Control<T>;
  type?: any;
  name: FieldPath<T>;
  low: FieldPath<T>;
  high: FieldPath<T>;
  min?: number;
  max?: number;
  unit?: string | React.ReactNode;
  label?: string | React.ReactNode;
  placeholder?: string;
  orientation?: "responsive" | "horizontal" | "vertical";
  description?: string;
} & ComponentProps<"input">;

export default function RangeField<T extends FieldValues>({
  className,
  orientation = "responsive",
  control,
  type,
  name,
  low,
  high,
  min = 0,
  max = 100,
  unit,
  label,
  placeholder,
  description,
  value,
}: RangeFieldProps<T>) {
  const id = `${name}-range-field`;
  const preferenceContext = useContext(UserPreferencesContext);
  const { register } = useFormContext();
  const revisionContext = useContext(RevisionContext);
  const onValueChange = useCallback(
    (cb: (newValue: any) => void) => (newValue: any) => {
      revisionContext?.update({
        type: "SET",
        payload: {
          name,
          prev: value,
          value: newValue,
        },
      });
      console.log({ name, value, newValue });
      cb(newValue);
    },
    [name, revisionContext, value],
  );

  return (
    <FieldGroup className={className}>
      <Controller
        name={name}
        defaultValue={value as any}
        control={control}
        render={({ field, fieldState }) => (
          <Field
            className="bg-white px-3 py-2 my-2 rounded-md"
            orientation="vertical"
            data-invalid={!!fieldState.error}
          >
            <FieldContent className="grow grid grid-cols-2 w-full gap-2 ">
              <FieldLabel htmlFor={id}>{label}</FieldLabel>
              <FieldDescription className="text-right">
                {JSON.stringify(field.value)}
              </FieldDescription>
            </FieldContent>
            <input
              type="hidden"
              name={`${low}.value`}
              value={field.value?.[0] / 100}
            />
            <input type="hidden" name={`${low}.unit`} value={"number"} />
            <input
              type="hidden"
              name={`${high}.value`}
              value={field.value?.[1] / 100}
            />
            <input type="hidden" name={`${high}.unit`} value={"number"} />

            <div className="flex justify-between px-2">
              <span className="font-bold m-auto">{min}</span>
              <Slider
                className="grow m-2 h-12 my-auto border-black"
                min={min}
                max={max}
                value={field.value}
                ref={field.ref}
                onValueChange={onValueChange(field.onChange)}
              />
              <span className="font-bold m-auto">{max}</span>
            </div>

            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
    </FieldGroup>
  );
}
