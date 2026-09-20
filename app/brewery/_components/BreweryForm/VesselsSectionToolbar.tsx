import IconButton from "@/components/Button/IconButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModalContext } from "@/contexts/ModalContext";
import {
  AdjustedBreweryType,
  BreweryInputType,
  BreweryType,
} from "@/types/Brewery";
import {
  PlusIcon,
  HopIcon,
  WheatIcon,
  HeartPulseIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { useContext } from "react";
import { appendErrors, UseFieldArrayAppend } from "react-hook-form";
let counter = 0;
export function VesselsSectionToolbar({
  src,
  append,
  // handleDialogOpen,
}: {
  src?: BreweryType;
  append?: UseFieldArrayAppend<AdjustedBreweryType>;
  // handleDialogOpen: (id: string) => () => void;
}) {
  const handleAdd = () =>
    append?.({
      name: `fv-${counter++}`,
      type: "Fermenter",
      volume: { value: 10 * counter, unit: "L" },
      breweryId: src?.id,
    });
  const { open, handleDialogOpen, triggerId } = useContext(ModalContext);
  return (
    <div className="flex items-center lg:gap-2 px-1 lg:px-4">
      <IconButton
        id="vessel"
        icon={PlusIcon}
        label="Add Def"
        onClick={handleAdd}
      />

      <IconButton
        id="vessel"
        icon={PlusIcon}
        label="Add Vessel"
        onClick={handleDialogOpen({ type: "vessel", id: undefined })}
      />
    </div>
  );
}
