import { getFermentables } from "@/app/(ingredients)/fermentables/queries";
import { getHops } from "@/app/(ingredients)/hops/queries";
import { getYeasts } from "@/app/(ingredients)/yeasts/queries";
import { getEquipmentProfiles } from "@/app/(profiles)/equipment/queries";
import { getMashProfiles } from "@/app/(profiles)/mash/queries";
import { getStyles } from "@/app/styles/queries";
import IngredientProvider from "@/components/IngredientProvider";
import ModalProvider from "@/components/ModalProvider";
import { IngredientContext } from "@/contexts/IngredientContext";
import { createStore } from "little-state-machine";
export default function RecipeEditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ModalProvider>{children}</ModalProvider>;
}
