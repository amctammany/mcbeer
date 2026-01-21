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
import { get } from "@/lib/utils";
import { FormStateContext } from "@/contexts/FormStateContext";
import { Textarea } from "../ui/textarea";

export type TextAreaFieldProps<T extends FieldValues> = InputProps<T> &
  VariantProps<typeof textAreaFieldStyles>;
const textAreaFieldStyles = cva(
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
  },
);
export function TextAreaField<T extends FieldValues>({
  name,
  // error,
  className,
  label,
  description,
  suffix,
  variant,
  value,
  orientation = "vertical",
  //size,
  inputSize = "full",
  ...props
}: TextAreaFieldProps<T>) {
  const id = `${name}-field`;
  const { getValues, register, getFieldState, formState } = useFormContext();
  const revisionContext = useContext(RevisionContext);
  const state = useContext(FormStateContext);
  const regProps = register(name);
  const fieldState = getFieldState(name);
  const onValueChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const old = get(state.data, name);
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

  const error = state.errors?.[`${name}.value`]; //get(state.errors ?? {}, `${name}.value`);

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
        <Textarea
          className="grow"
          id={id}
          {...regProps}
          onBlur={onValueChange}
          // defaultValue={formState.defaultValues?.[name]}

          // defaultValue={get(state.data ?? {}, name)}
          // onChange={(e) => onValueChange(regProps.onChange)(e.target.value)}
        />
        <FieldError>{error?.message}</FieldError>
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
