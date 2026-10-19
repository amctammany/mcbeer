import React, { useCallback, useMemo } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { SearchIcon, XCircleIcon } from "lucide-react";
import clsx from "clsx";
export type SearchBoxProps = {
  value?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
export default function SearchBox({
  onChange,
  value,
  label,
  placeholder,
  className,
}: SearchBoxProps) {
  //   const [filterValue, setFilterValue] = React.useState<string>(value || "");
  const changeCb: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // setFilterValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <Field
      className={clsx(
        "flex h-10 text-lg w-full rounded-md  bg-transparent px-3 py-1 textbase transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden invalid:ring-destructive disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",
        className,
      )}
    >
      <InputGroup className="px-4 py-2 h-12">
        <InputGroupInput
          type="search"
          value={value || ""}
          className="text-xl! h-12"
          placeholder={placeholder || "Search"}
          onChange={changeCb}
        />
        <InputGroupAddon className="siz-4">
          <SearchIcon className="sie-4" width="44" height={44} />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
