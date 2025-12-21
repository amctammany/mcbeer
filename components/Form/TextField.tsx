import { Label } from "./Label";
//import { cva } from "class-variance-authority";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input, InputProps } from "./Input";
import { FieldValue, FieldValues } from "react-hook-form";

export type TextFieldProps<T extends FieldValues> = InputProps<T> &
  VariantProps<typeof textFieldStyles>;
const textFieldStyles = cva(
  "disabled:bg-slate-50 disabled:shadow-none disabled:text-slate-500 disabled:border-slate-200 bg-white",
  {
    variants: {
      variant: {
        error: ["border-2 border-red-500 "],
        default: ["block border-2 "],
      },
      size: {
        default: ["w-full"],
        small: [""],
      },
      suffix: {
        default: [],
        active: ["border-r-0"],
      },
    },
    defaultVariants: { size: "default", variant: "default", suffix: "default" },
  }
);
export function TextField<T extends FieldValues>({
  name,
  error,
  className,
  label,
  description,
  suffix,
  variant,
  //size,
  inputSize = "full",
  ...props
}: TextFieldProps<T>) {
  const id = `${name}-field`;
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input id={id} name={name} {...props} />
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{error}</FieldError>
    </Field>
  );
}
