import { Brewery, User } from "@/generated/prisma/browser";

import { BreweryForm } from "@/app/brewery/_components/BreweryForm/BreweryForm";
import BreweryCreatorToolbar from "./BreweryCreatorToolbar";
import BreweryFormContainer from "../BreweryForm/BreweryFormContainer";
import { BreweryInputType, BreweryType } from "@/types/Brewery";
import BreweryModals from "../BreweryModals";

export type BreweryProps<S = unknown> = {
  action: (prev: S, formData: FormData) => S | Promise<S>;
  src: BreweryInputType;
};
export function BreweryCreator({ src, action }: BreweryProps) {
  return (
    <BreweryFormContainer
      src={src}
      action={action}
      toolbar={<BreweryCreatorToolbar />}
      modals={<BreweryModals key="modals" breweryId={src.id} />}
    >
      <BreweryForm />
    </BreweryFormContainer>
  );
}

export default BreweryCreator;
