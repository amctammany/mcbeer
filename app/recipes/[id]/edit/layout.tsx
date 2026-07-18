import { getFermentables } from "@/app/(ingredients)/fermentables/queries";
import { getHops } from "@/app/(ingredients)/hops/queries";
import { getYeasts } from "@/app/(ingredients)/yeasts/queries";
import { getEquipmentProfiles } from "@/app/(profiles)/equipment/queries";
import { getMashProfiles } from "@/app/(profiles)/mash/queries";
import { getStyles } from "@/app/styles/queries";
import IngredientProvider from "@/components/IngredientProvider";
import { IngredientContext } from "@/contexts/IngredientContext";

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
      fermPromise={getFermentables({
        select: { name: true, id: true, color: true, potential: true },
      })}
      yeastPromise={getYeasts({
        select: { name: true, id: true, attenuation: true },
      })}
    >
      {children}
    </IngredientProvider>
  );
}
