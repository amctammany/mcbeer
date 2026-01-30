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
  DropdownMenuGroup,
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
import { ChevronDownIcon, MoreHorizontal } from "lucide-react";
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
import { convertUnit, isUnitValue } from "@/lib/Converter/adjustUnits";
import { getInMask } from "@/lib/Converter/Masks";
import { FormStateContext } from "@/contexts/FormStateContext";
import { get } from "@/lib/utils";
import { PercentUnit } from "@/generated/prisma/enums";
export type VariableAmountFieldProps<T extends FieldValues> = InputProps<T> &
  VariantProps<typeof variableAmountFieldStyles> & {
    amountType?: UnitTypes;
    unit?: UnitNames;
    min?: number;
    max?: number;
  };
const variableAmountFieldStyles = cva(
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

export function VariableAmountField<T extends FieldValues>({
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
}: VariableAmountFieldProps<T>) {
  const id = `${name}-field`;
  const { register, getFieldState, formState, getValues } = useFormContext();
  /** 
  const preferenceContext = useContext(UserPreferencesContext);
  const { mask } = useContext(MaskContext);
  const mn = getInMask(mask, name);
  const maskV = Array.isArray(mn) ? mn[0] : mn;
  const s = preferenceContext?.[maskV as keyof typeof preferenceContext];
  // const unitN = _unit ?? (amountType ? preferenceContext?.[amountType!] : "");
*/
  const unitName = isUnitValue(val)
    ? val.unit
    : amountType === "percent"
      ? PercentUnits[amountType]
      : BASE_UNITS[amountType!];
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
  const unit = _unit ?? unitName ?? get(state.data, `${name}.unit`);
  const u =
    unit === "percent" || unit === "number"
      ? PercentUnits[unit as PercentUnit]
      : unit;
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
    <Field
      className="bg-white lg:px-3 lg:py-2 m-1 lg:my-2 rounded-md"
      orientation={orientation}
      data-invalid={!!error}
    >
      <FieldContent className="grow grid w-full gap-2 ">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <FieldDescription>{description}</FieldDescription>
      </FieldContent>

      <InputGroup
        className="gap-2 w-full grow"
        // aria-invalid={!!fieldState.error}
      >
        <input type="hidden" value={unit} name={`${name}.unit`} />

        <InputGroupInput
          className="text-center grow"
          id={id}
          type="number"
          {...inputProps}
          // ref={field.ref}
          // name={`${field.name}.value`}
          // name={field.name}
          // value={field.value}
          step={props.step ?? 0.1}
          // defaultValue={get(state.data, `${name}.value`)}
          onBlur={onValueChange}
          // onBlur={field.onBlur}
        />

        <InputGroupAddon
          aria-invalid={!!error}
          className="w-4"
          align="inline-end"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="More"
                size="icon-xs"
              >
                <MoreHorizontal />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Copy path</DropdownMenuItem>
                <DropdownMenuItem>Open location</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost" className="!pr-1.5 text-xs">
                Search In... <ChevronDownIcon className="size-3" />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
              <DropdownMenuGroup>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Blog Posts</DropdownMenuItem>
                <DropdownMenuItem>Changelog</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText>{u}</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldError>{error?.message}</FieldError>
    </Field>
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

export default VariableAmountField;
