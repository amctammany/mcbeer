import { Item, ItemContent, ItemTitle, ItemDescription } from "../ui/item";

export const InlineProp = ({
  label,
  value,
  children,
}: {
  label: string;
  unit?: string;
  value?: string | number | null;
  children?: React.ReactNode;
}) => (
  <Item size="sm" variant="outline" className="m-1">
    <ItemContent className="flex-row">
      <ItemTitle className="pr-2">{label}</ItemTitle>
      <ItemDescription className="text-pretty line-clamp-none">
        {children ?? value}
      </ItemDescription>
    </ItemContent>
  </Item>
);
export default InlineProp;
