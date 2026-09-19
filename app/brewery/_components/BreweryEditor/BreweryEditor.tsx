import { BreweryForm } from "@/app/brewery/_components/BreweryForm/BreweryForm";
// import { ExtendedUser } from "@/types/User";
import BreweryEditorToolbar from "./BreweryEditorToolbar";
import BreweryFormContainer from "../BreweryForm/BreweryFormContainer";
import { BreweryType } from "@/types/Brewery";
import BreweryModals from "../BreweryModals";
export type BreweryProps<S = unknown> = {
  action: (prev: S, formData: FormData) => S | Promise<S>;
  // user: BreweryUser;
  src: BreweryType;
};
export function BreweryEditor({ src, action }: BreweryProps) {
  return (
    <BreweryFormContainer
      src={src}
      action={action}
      toolbar={<BreweryEditorToolbar src={src} />}
      modals={<BreweryModals breweryId={src.id} />}
    >
      {/* <BreweryModals /> */}
      <BreweryForm />
    </BreweryFormContainer>
  );
}

export default BreweryEditor;
