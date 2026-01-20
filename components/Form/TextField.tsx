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
  orientation = "responsive",
  //size,
  inputSize = "full",
  ...props
}: TextFieldProps<T>) {
  const id = `${name}-field`;
  const { getValues, register, getFieldState } = useFormContext();
  const revisionContext = useContext(RevisionContext);
  const onValueChange: (o: any) => React.ChangeEventHandler<HTMLInputElement> =
    (old) => (e) => {
      const newValue = e.target.value;
      if (old !== newValue)
        revisionContext?.update({
          type: "SET",
          payload: {
            name,
            prev: old,
            value: newValue,
          },
        });
      // cb(e);
      // const converted = convert(newValue, false);
      // console.log({ name, value, newValue, converted });
    };

  const regProps = register(name);
  const fieldState = getFieldState(name);
  return (
    <FieldGroup>
      <Field
        className="bg-white p-2 lg:px-3 lg:py-2 lg:my-2 rounded-md"
        orientation={orientation}
        data-invalid={!!fieldState.error}
      >
        <FieldContent className="grid w-full gap-2 ">
          <FieldLabel htmlFor={id}>{label}</FieldLabel>

          <FieldDescription>{description}</FieldDescription>
        </FieldContent>
        <Input
          className="grow"
          id={id}
          type="text"
          {...regProps}
          onBlur={onValueChange(getValues(name))}
          // onChange={(e) => onValueChange(regProps.onChange)(e.target.value)}
        />
        <FieldError>{fieldState.error?.message}</FieldError>
      </Field>
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
