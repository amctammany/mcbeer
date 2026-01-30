import { notFound } from "next/navigation";
import RecipeEditor from "../../_components/RecipeEditor/RecipeEditor";
import { getRecipe } from "../../queries";
import { updateRecipe } from "../../actions";
import { getStyleNames } from "@/app/styles/queries";

export type RecipeEditorPageProps = {
  params: Promise<{ id: string }>;
};
export default async function RecipeEditorPage({
  params,
}: RecipeEditorPageProps) {
  const { id } = await params;
  const recipe = await getRecipe(id);
  if (!recipe) notFound();
  const styles = getStyleNames();
  return <RecipeEditor styles={styles} src={recipe} action={updateRecipe} />;
}
