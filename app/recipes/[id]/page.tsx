import { notFound } from "next/navigation";
import RecipeDisplay from "../_components/RecipeDisplay/RecipeDisplay";
import { getRecipe } from "../queries";
import RecipeDisplayToolbar from "../_components/RecipeDisplay/RecipeDisplayToolbar";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { RecipeMask } from "@/lib/Converter/Masks";
import { getPreferences, getUserPreferences } from "@/app/admin/queries";

export type RecipeDisplayPageProps = {
  params: Promise<{ id: string }>;
};
export default async function RecipeDisplayPage({
  params,
}: RecipeDisplayPageProps) {
  const { id } = await params;
  const prefs = await getPreferences();
  const recipe = await getRecipe(id);
  // console.log({ id, recipe });
  if (!recipe) notFound();
  const adjusted = adjustUnits({
    src: recipe,
    mask: RecipeMask,
    prefs,
    dir: false,
    inline: false,
  });
  return (
    <div>
      <RecipeDisplayToolbar recipe={recipe} />
      <RecipeDisplay src={adjusted} />
    </div>
  );
}
