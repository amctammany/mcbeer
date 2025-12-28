import { cva, VariantProps } from "class-variance-authority";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "../ui/item";

const propVariants = cva("m-1", {
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
  <Item size="sm" variant="outline" className={propVariants({ variant })}>
    <ItemContent>
      <ItemTitle>{label}</ItemTitle>
      <ItemDescription className="text-pretty line-clamp-none">
        {children ?? value}
      </ItemDescription>
    </ItemContent>
    <ItemActions>
      <ItemDescription>{unit ?? ""}</ItemDescription>
    </ItemActions>
  </Item>
);
export default Prop;
