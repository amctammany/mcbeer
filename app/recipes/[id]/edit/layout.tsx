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
function log(store: any) {
  console.log("store", store);
  return store;
}
createStore(
  {
    recipe: null,
    hopIngredients: [],
    fermentableIngredients: [],
    revisionCtx: null,
    idCounter: 0,
  },
  {
    middleWares: [log],
  },
);
export default function RecipeEditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <IngredientProvider
      stylePromise={getStyles()}
      equipPromise={getEquipmentProfiles({ select: { name: true, id: true } })}
      mashPromise={getMashProfiles({ select: { name: true, id: true } })}
      hopPromise={getHops({ select: { name: true, id: true, alpha: true } })}
      fermentablePromise={getFermentables({
        select: { name: true, id: true, color: true, potential: true },
      })}
      yeastPromise={getYeasts({
        select: { name: true, id: true, attenuation: true },
      })}
    >
      <ModalProvider>{children}</ModalProvider>
    </IngredientProvider>
  );
}
