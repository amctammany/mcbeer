import IconButton from "@/components/Button/IconButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModalContext } from "@/contexts/ModalContext";
import { BreweryType } from "@/types/Brewery";
import {
  PlusIcon,
  HopIcon,
  WheatIcon,
  HeartPulseIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { useContext } from "react";

export function VesselsSectionToolbar(
  {
    // handleDialogOpen,
  }: {
    src?: BreweryType;
    // handleDialogOpen: (id: string) => () => void;
  },
) {
  const { open, handleDialogOpen, triggerId } = useContext(ModalContext);
  return (
    <div className="flex items-center lg:gap-2 px-1 lg:px-4">
      <IconButton
        id="vessel"
        icon={PlusIcon}
        label="Add Vessel"
        onClick={handleDialogOpen({ type: "vessel", id: undefined })}
      />
    </div>
  );
}
