"use client";
import React, { useContext } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { cva, VariantProps } from "class-variance-authority";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field";
import {
  BASE_UNITS,
  PercentUnits,
  UNITS,
  UnitTypeDict,
  type UnitNames,
  type UnitTypes,
} from "@/lib/Converter/UnitDict";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { MoreHorizontal } from "lucide-react";
import { SelectField } from "./SelectField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RevisionContext } from "@/contexts/RevisionContext";
import clsx from "clsx";
import { UserPreferencesContext } from "@/contexts/UserPreferencesContext";
import { MaskContext } from "@/contexts/MaskContext";
import {
  adjustUnit,
  convertUnit,
  isUnitValue,
} from "@/lib/Converter/adjustUnits";
import { getInMask } from "@/lib/Converter/Masks";
import { FormStateContext } from "@/contexts/FormStateContext";
import { get } from "@/lib/utils";
import { PercentUnit } from "@/generated/prisma/enums";
import { getBaseUnit } from "@/lib/Converter/Converter";
export type AmountFieldProps<T extends FieldValues> = InputProps<T> &
  VariantProps<typeof amountFieldStyles> & {
    amountType?: UnitTypes;
    unit?: UnitNames;
    min?: number;
    max?: number;
  };
const amountFieldStyles = cva(
  "disabled:bg-slate-50 disabled:shadow-none disabled:text-slate-500 disabled:border-slate-200 bg-white",
  {
    variants: {
      variant: {
        error: [],
        default: [],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function AmountField<T extends FieldValues>({
  name,
  label,
  // error,
  amountType,
  unit: _unit,
  description,
  className,
  orientation = "responsive",
  placeholder,
  control,
  value: val,
  ...props
}: AmountFieldProps<T>) {
  const id = `${name}-field`;
  const { register, getFieldState, formState, getValues } = useFormContext();
  // const preferenceContext = useContext(UserPreferencesContext);
  // const { mask } = useContext(MaskContext);
  // const mn = getInMask(mask, name);
  // const maskV = Array.isArray(mn) ? mn[0] : mn;
  // const s = preferenceContext?.[maskV as keyof typeof preferenceContext];
  // // const unitN = _unit ?? (amountType ? preferenceContext?.[amountType!] : "");
  // /**
  //  */
  // // console.log({ name, _unit, s, mn, maskV, val, amountType });
  // const unitName = isUnitValue(val) ? val.unit : s;
  // // : amountType === "percent"
  // // ? PercentUnits[amountType]
  // // : BASE_UNITS[amountType!];
  const unit =
    _unit ??
    (isUnitValue(val)
      ? val.unit
      : BASE_UNITS[amountType as keyof typeof BASE_UNITS]);

  const value = typeof val === "number" ? val : val?.value;
  // console.log({ val, value, unitName });
  // console.log({ maskV, value, unit, s, unitName });
  // const convert = (v: number, dir = true) =>
  //   convertUnit({
  //     value: v,
  //     type: maskV,
  //     unit,
  //     inline: true,
  //     dir,
  //   }.);
  // const convert = adjustUnit({
  //   value,
  //   unit,
  //   inline: true,
  // });
  /**const options = (UnitTypeDict[amountType] ?? []).reduce((acc, unit) => {
    acc[unit] = unit;
    return acc;
  }, {} as Record<UnitNames, UnitNames>);
  */
  const revisionContext = useContext(RevisionContext);
  const state = useContext(FormStateContext);
  const { ...inputProps } = register(`${name}.value`, {
    valueAsNumber: true,
  });
  // register(`${name}.unit`, {value: amountType ? BASE_UNITS[amountType] : getBaseUnit(unit)} )
  // const unit = _unit ?? unitName ?? get(state.data, `${name}.unit`);
  const u =
    unit === "%" || unit === "#" ? PercentUnits[unit as PercentUnit] : unit;
  const _u = unit ?? get(state.data, `${name}.unit`);
  const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const old = get(state.data, `${name}.value`);
    const newValue = parseFloat(e.target.value);
    if (old !== newValue)
      revisionContext?.update({
        type: "SET",
        payload: {
          name: `${name}.value`,
          prev: old,
          value: newValue,
        },
      });
    // cb(e);
    // const converted = convert(newValue, false);
    // console.log({ name, value, newValue, converted });
  };
  // const _v = state.data?.[`${name}`]; //get(state.errors ?? {}, `${name}.value`);
  const error = state.errors?.[`${name}.value`]; //get(state.errors ?? {}, `${name}.value`);
  // console.log(name, _v);
  // const fieldState = getFieldState(name);

  return (
    <FieldGroup>
      <Field
        className="bg-white rounded-md grid lg:flex  "
        orientation={orientation}
        data-invalid={!!error}
      >
        <FieldContent className="grow grid w-full gap-2 ">
          <FieldLabel htmlFor={id}>{label}</FieldLabel>
          <FieldDescription>{description}</FieldDescription>
        </FieldContent>

        <InputGroup
          className="gap-1 w-full grow"
          // aria-invalid={!!fieldState.error}
        >
          <input type="hidden" value={unit} {...register(`${name}.unit`)} />

          <InputGroupInput
            className="text-center grow"
            id={id}
            type="number"
            {...inputProps}
            // ref={field.ref}
            // name={`${field.name}.value`}
            // name={field.name}
            // value={field.value}
            step={props.step ?? 0.01}
            // defaultValue={get(state.data, `${name}.value`)}
            onBlur={onValueChange}
            // onBlur={field.onBlur}
          />

          <InputGroupAddon
            aria-invalid={!!error}
            className="w-4 md:w-6 mr-2"
            align="inline-end"
          >
            <InputGroupText>{_u === "percent" ? "%" : _u}</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldError>{error?.message}</FieldError>
      </Field>
    </FieldGroup>
  );
  /**
  return (
    <FieldGroup>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field
            className="bg-white px-3 py-2 my-2 rounded-md"
            orientation={orientation}
            data-invalid={!!fieldState.error}
          >
            <FieldContent className="grow grid w-full gap-2 ">
              <FieldLabel htmlFor={id}>{label}</FieldLabel>
              <FieldDescription>{description}</FieldDescription>
            </FieldContent>

            <InputGroup
              className="gap-2 w-full grow"
              aria-invalid={!!fieldState.error}
            >
              <input
                type="hidden"
                value={unitName}
                name={`${field.name}.unit`}
              />

              <InputGroupInput
                className="text-center grow"
                id={id}
                type="number"
                ref={field.ref}
                name={`${field.name}.value`}
                // name={field.name}
                value={field.value}
                step={props.step ?? 0.1}
                onChange={(e) =>
                  onValueChange(field.onChange)(parseFloat(e.target.value))
                }
                onBlur={field.onBlur}
              />

              <InputGroupAddon
                aria-invalid={!!fieldState.error}
                className="w-4"
                align="inline-end"
              >
                <InputGroupText aria-invalid={!!fieldState.error}>
                  {unitName}
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
    </FieldGroup>
  );
 */
}

export default AmountField;
