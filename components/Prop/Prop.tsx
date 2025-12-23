import { cva, VariantProps } from "class-variance-authority";
import { Item, ItemContent, ItemTitle, ItemDescription } from "../ui/item";

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
  value?: string | number | null;
  children?: React.ReactNode;
} & VariantProps<typeof propVariants>;
export const Prop = ({ label, value, variant, children }: PropProps) => (
  <Item size="sm" variant="outline" className={propVariants({ variant })}>
    <ItemContent>
      <ItemTitle>{label}</ItemTitle>
      <ItemDescription className="text-pretty line-clamp-none">
        {children ?? value}
      </ItemDescription>
    </ItemContent>
  </Item>
);
export default Prop;
