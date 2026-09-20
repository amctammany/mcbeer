import { notFound, redirect, unauthorized } from "next/navigation";
import RecipeEditor from "../../_components/NewRecipeEditor/RecipeEditor";
import { getRecipe } from "../../queries";
import { updateRecipe } from "../../actions";
import { headers } from "next/headers";
import { auth } from "@/auth";
import Login from "@/app/(auth)/login/Login";

export type RecipeEditorPageProps = {
  params: Promise<{ id: string }>;
};
export default async function RecipeEditorPage({
  params,
}: RecipeEditorPageProps) {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (!session) {
    return <Login redirectUrl={`/recipes/${id}/edit`} />;
  }
  const recipe = await getRecipe(id);
  console.log(recipe);
  if (!recipe) notFound();
  return <RecipeEditor src={recipe} action={updateRecipe} />;
}
