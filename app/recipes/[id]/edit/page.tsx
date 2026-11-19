import { notFound, unauthorized } from "next/navigation";
import RecipeEditor from "../../_components/NewRecipeEditor/RecipeEditor";
import { getRecipe } from "../../queries";
import { updateRecipe } from "../../actions";
import { verifySession } from "@/lib/verifySession";

export type RecipeEditorPageProps = {
  params: Promise<{ id: string }>;
};
export default async function RecipeEditorPage({
  params,
}: RecipeEditorPageProps) {
  const { id } = await params;
  const session = await verifySession(`/recipes/${id}/edit`);
  if (!session?.user) unauthorized();
  const _recipe = await getRecipe(id);
  if (!_recipe) notFound();
  const recipe = {
    ..._recipe,
    mashSteps: _recipe.MashProfile?.steps ?? [],
    fermentationSteps: _recipe.FermentationProfile?.steps ?? [],
  };
  return <RecipeEditor src={recipe} action={updateRecipe} />;
}
