import React from "react";
import { getBreweryFolders } from "../../queries";
import { RecipeFolderType } from "@/types/Recipe";
import Tree from "./Tree";

export type TreeType<S> = S & { children: TreeType<S>[] };
export type FolderTreeProps = {
  breweryId?: string;
};
function buildTree(
  folders: RecipeFolderType[],
  pId: string | null = null,
): TreeType<RecipeFolderType>[] {
  return folders
    .filter((item) => item.parentId === pId)
    .map((item) => ({
      ...item,
      children: buildTree(folders, item.id),
    })); //   const branches = folders.find(({ parentId }) => parentId === pId);
  //   return branches;
}
function createFolderTree(folders: RecipeFolderType[]) {
  //   const root = folders.find(({ name }) => name === "root");
  //   if (!root) {
  // throw new Error("No root folder for brewery");
  //   }
  const tree = buildTree(folders);
  return tree;
}
export default async function FolderTree({ breweryId }: FolderTreeProps) {
  const tree = createFolderTree(
    breweryId ? await getBreweryFolders(breweryId) : [],
  );
  const src =
    tree.length > 0
      ? tree[0]
      : ({
          name: "root",
          children: [],
          id: "",
          recipes: [],
          breweryId: "",
          parentId: "",
          pathname: "",
        } as TreeType<RecipeFolderType>); //   const src = tree[0] ?? { name: "root", children: [] };
  return (
    <div>
      FolderTree
      <Tree src={src} />
    </div>
  );
}
