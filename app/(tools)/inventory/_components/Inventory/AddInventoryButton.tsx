import IconButton from "@/components/Button/IconButton";
import { InventoryItemType } from "@/types/Inventory";
import { PlusCircleIcon } from "lucide-react";

export type AddInventoryButtonProps = {
  type: InventoryItemType;
};
export const AddInventoryButton = ({ type }: AddInventoryButtonProps) => {
  return <IconButton icon={PlusCircleIcon} label="Add" />;
};

export default AddInventoryButton;
