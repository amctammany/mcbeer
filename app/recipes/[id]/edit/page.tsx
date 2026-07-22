import { notFound, redirect, unauthorized } from "next/navigation";
import RecipeEditor from "../../_components/RecipeEditor/RecipeEditor";
import { getRecipe } from "../../queries";
import { updateRecipe } from "../../actions";
import { getStyleNames } from "@/app/styles/queries";
import { Style } from "@/generated/prisma/client";
import { getEquipmentProfileNames } from "@/app/(profiles)/equipment/queries";
import { RecipeMask } from "@/lib/Converter/Masks";
import { adjustUnits } from "@/lib/Converter/adjustUnits";
import { headers } from "next/headers";
import { auth } from "@/auth";
import { getPreferences } from "@/app/admin/queries";
import ModalProvider from "@/components/ModalProvider";
import LoginForm from "@/app/(auth)/login/LoginForm";
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
    // redirect(`/login?redirect_url=/recipes/${id}/edit`);
    // return unauthorized();
  }
  const prefs = await getPreferences();
  const recipe = await getRecipe(id);
  if (!recipe) notFound();
  // const styles = getStyleNames();
  const adjusted = adjustUnits({
    src: recipe,
    mask: RecipeMask,
    inline: false,
    dir: false,
    prefs,
  });
  // console.log(adjusted, recipe);
  return (
    <RecipeEditor
      // styles={styles}
      src={adjusted}
      action={updateRecipe}
      // equipmentProfiles={getEquipmentProfileNames()}
    />
  );
}
