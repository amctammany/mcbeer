import IconButton from "@/components/Button/IconButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InventoryItemType } from "@/types/Inventory";
import { PlusCircleIcon } from "lucide-react";
import React from "react";

export type AddInventoryButtonProps = {
  type: InventoryItemType;
  children?: React.ReactNode | React.ReactNode[];
};
export const AddInventoryButton = ({
  type,
  children,
}: AddInventoryButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton icon={PlusCircleIcon} label="Add" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add {type}</DialogTitle>
          <DialogDescription>Add to Inventory</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">{children}</div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  return;
};

export default AddInventoryButton;
