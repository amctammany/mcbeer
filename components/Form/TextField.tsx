import { Label } from "./Label";
//import { cva } from "class-variance-authority";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input, InputProps } from "./Input";
import {
  Controller,
  FieldValue,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { RevisionContext } from "@/contexts/RevisionContext";
import { useContext } from "react";

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
  value,
  //size,
  inputSize = "full",
  ...props
}: TextFieldProps<T>) {
  const id = `${name}-field`;
  const { control } = useFormContext();
  const revisionContext = useContext(RevisionContext);
  const onValueChange = (cb: (newValue: any) => void) => (newValue: any) => {
    revisionContext?.update({
      type: "SET",
      payload: {
        name,
        prev: value,
        value: newValue,
      },
    });
    // console.log({ name, value, newValue });
    cb(newValue);
  };
  return (
    <FieldGroup>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={!!fieldState.error}>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <FieldContent className="grid w-full gap-2 ">
              <Input
                className=""
                id={id}
                type="text"
                value={field.value ?? ""}
                name={field.name}
                onChange={(e) => onValueChange(field.onChange)(e.target.value)}
                onBlur={field.onBlur}
              />
            </FieldContent>
            <FieldDescription>{description}</FieldDescription>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Field>
        )}
      />
    </FieldGroup>
  );
  /**
    </Field><Field>
      <FieldContent>
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <FieldDescription>{description}</FieldDescription>
        <FieldError>{error}</FieldError>
      </FieldContent>
      <Input id={id} name={name} {...props} />
    </Field>
  );
*/
}
