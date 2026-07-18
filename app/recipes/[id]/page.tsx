import { notFound } from "next/navigation";
import RecipeDisplay from "../_components/RecipeDisplay/RecipeDisplay";
import { getRecipe } from "../queries";
import RecipeDisplayToolbar from "../_components/RecipeDisplay/RecipeDisplayToolbar";

export type RecipeDisplayPageProps = {
  params: Promise<{ id: string }>;
};
export default async function RecipeDisplayPage({
  params,
}: RecipeDisplayPageProps) {
  const { id } = await params;
  const recipe = await getRecipe(id);
  if (!recipe) notFound();
  return (
    <div>
      <RecipeDisplayToolbar recipe={recipe} />
      <RecipeDisplay src={recipe} />
    </div>
  );
}
