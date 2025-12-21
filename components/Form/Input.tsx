import { ComponentProps, useContext } from "react";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { Input as UIInput } from "@/components/ui/input";
import { SchemaFieldError } from "@/lib/validateSchema";
import { RevisionContext } from "@/contexts/RevisionContext";
import {
  Control,
  FieldPath,
  FieldValues,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";

export type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: FieldPath<T>;
  description?: string | React.ReactNode;
  label?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  defaultValue?: any;
  disabled?: boolean;
  error?: string | React.ReactNode;
  //onChange?: (e: SyntheticEvent) => void;
  //onBlur?: (e: SyntheticEvent) => void;
  value?: any;
  ref?: any;
} & ComponentProps<"input"> &
  VariantProps<typeof inputStyles>;

export const inputStyles = cva(
  //"disabled:bg-slate-50 disabled:shadow-none disabled:text-slate-500 disabled:border-slate-200",

  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden invalid:ring-destructive disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",

  {
    variants: {
      variant: {
        error: [
          "border-2 border-red-500 focus-visible:ring-1 focus-visible:ring-destructive",
        ],
        inline: ["inline-block"],
        default: ["block focus-visible:ring-1 focus-visible:ring-ring "],
      },
      inputSize: {
        default: [],
        full: ["w-full"],
        small: ["w-8"],
      },
      suffixV: {
        default: [""],
        error: ["border-2 borderr-0 ounded-r-none border-destructive"],
        active: ["border-r-0 rounded-r-none"],
      },
    },
    defaultVariants: {
      inputSize: "default",
      variant: "default",
      suffixV: "default",
    },
  }
);
export function Input<T extends FieldValues>({
  //name,
  //onChange,
  //onBlur,
  //value,
  register,
  error,
  className,
  //disabled,
  //label,
  //suffix,
  //defaultValue,
  variant,
  inputSize,
  //ref,
  ...props
}: InputProps<T>) {
  const revisionContext = useContext(RevisionContext);
  const formContext = useFormContext<T>();
  const { onBlur: _onBlur, ...inputProps } = register(props.name);
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    revisionContext?.updateHistory(e);
    if (_onBlur) {
      _onBlur(e);
    }
  };
  return (
    <UIInput
      className={clsx(
        inputStyles({
          variant: error ? "error" : variant,
          inputSize,
          //suffixV: suffix ? (error ? "error" : "active") : "default",
        }),
        className
      )}
      onBlur={onBlur}
      type={props.type ?? "text"}
      {...inputProps}
      {...props}
    />
  );
}
