import { cva, VariantProps } from "class-variance-authority";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "../ui/item";
import clsx from "clsx";

const propVariants = cva("m-1 border-b-black border-b-2 rounded-b-none", {
  variants: {
    variant: {
      default: "",
      inline: "*:first:flex-row *:first:*:first:pr-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export type PropProps = {
  label: string;
  unit?: string;
  value?: string | number | null | React.ReactNode;
  children?: React.ReactNode;
} & VariantProps<typeof propVariants>;
export const Prop = ({ label, value, variant, children, unit }: PropProps) => (
  <Item size="sm" className={propVariants({ variant })}>
    <ItemContent>
      <ItemTitle className="bold border-b-2 ">{label}</ItemTitle>
      <ItemDescription className="flex w-full text-pretty ">
        <span className="grow">{children ?? value}</span>
        <span className={clsx("shrink", { hidden: !unit })}>{unit}</span>
      </ItemDescription>
    </ItemContent>
  </Item>
);
export default Prop;
