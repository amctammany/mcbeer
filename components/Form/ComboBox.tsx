"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ComboboxInput,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxValue,
} from "../ui/combobox";

const options = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export type Option = { value: string; label: string };
export type ComboBoxProps = {
  name?: string;
  options: Option[];
  value?: any;
  itemToStringLabel?: (item: Option) => string;
  itemToStringValue?: (item: Option) => string;
  onChange: (value: Option | string | null) => void;
  placeholder?: string;
};
export function ComboBox({
  placeholder,
  name,
  options,
  value,
  itemToStringLabel = (item) => item.label,
  itemToStringValue = (item) => item.value,
  onChange,
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const selectedOption =
    options[
      options.findIndex(
        (o) => o.value === (typeof value === "string" ? value : value?.value),
      )
    ] ?? null;
  console.log(value, selectedOption);

  return (
    <Combobox
      name={name}
      value={selectedOption}
      items={options}
      onValueChange={onChange}
      itemToStringLabel={itemToStringLabel}
      itemToStringValue={itemToStringValue}
    >
      <ComboboxInput placeholder={placeholder ?? "Select an option"} />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem
              key={itemToStringValue(item)}
              value={itemToStringValue(item)}
            >
              {itemToStringLabel(item)}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
  /**
  return (
    <Popover modal={true} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full grow justify-between font-normal"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width)  p-0">
        <Command>
          <CommandInput
            name={name}
            value={value}
            onValueChange={onChange}
            placeholder="Search option..."
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
*/
}
