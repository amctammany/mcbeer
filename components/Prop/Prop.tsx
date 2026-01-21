import { cva, VariantProps } from "class-variance-authority";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemMedia,
} from "../ui/item";
import clsx from "clsx";
import { BadgeCheckIcon } from "lucide-react";

const propVariants = cva(
  "m-1 border-b-lack block bordr-b-2 rounded-b-one px-1 lg:px-3 py-1 lg:py-4",
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-2 border-black rounded",
        inline: "*:first:grid *:first:grid-cols-2 *:first:*:first:pr-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
export type PropProps = {
  className?: string;
  label?: string | React.ReactNode;
  unit?: string;
  value?: string | number | null | React.ReactNode;
  Icon?: any;
  children?: React.ReactNode;
} & VariantProps<typeof propVariants>;
export const Prop = ({
  className,
  label,
  value,
  variant,
  Icon,
  children,
  unit,
}: PropProps) => (
  <Item size="sm" className={clsx(propVariants({ variant }), className)}>
    <ItemMedia className={clsx("m-auto", { hidden: !Icon })}>
      {Icon && <Icon className="size-5 m-auto" />}
    </ItemMedia>
    <ItemContent className={variant === "inline" ? "grid grid-cols-2" : ""}>
      <ItemTitle className="bold border-b-2 grow ">{label}</ItemTitle>
      <ItemDescription className="flex w-full grow text-pretty justify-between items-center">
        <span
          className={clsx({ "text-left": !unit, "text-center": unit }, "grow ")}
        >
          {children ?? value}
        </span>
        <span className={clsx("shrink", { hidden: !unit })}>{unit}</span>
      </ItemDescription>
    </ItemContent>
  </Item>
);
export default Prop;
