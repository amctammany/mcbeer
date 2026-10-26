import React from "react";
import { getRecipeFolderAtLocation } from "@/app/recipes/queries";
import RecipeExplorer from "@/app/recipes/_components/RecipeExplorer/RecipeExplorer";
import { auth } from "@/auth";
import { headers } from "next/headers";
import Login from "@/app/(auth)/login/Login";
import { notFound, redirect } from "next/navigation";
import { createRootRecipeFolder } from "../../actions";

export type RecipeDirectoryPageProps = {
  params: Promise<{ path?: string[] }>;
};
export default async function RecipeDirectoryPage({
  params,
}: RecipeDirectoryPageProps) {
  const { path: _p } = await params;
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const path = (_p ?? []).join("/");
  if (!session) {
    return <Login redirectUrl={`/recipes/dir/${path}`} />;
  }
  const breweryId = session?.user?.defaultBreweryId;
  if (!breweryId) throw new Error("No valid brewery");
  const folder = await getRecipeFolderAtLocation({ breweryId, path });
  if (path.length === 0 && breweryId && !folder) {
    return await createRootRecipeFolder(breweryId);
  }
  if (!folder) notFound();
  return <RecipeExplorer folder={folder} userId={session.user.id} />;
}
