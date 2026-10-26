import React from "react";
import { getBreweryFolders } from "../../queries";
import { RecipeFolderType } from "@/types/Recipe";
import Tree from "./Tree";

export type FolderTreeProps = {
  breweryId: string;
};
function buildTree(
  folders: RecipeFolderType[],
  pId: string | null = null,
): any {
  return folders
    .filter((item) => item.parentId === pId)
    .map((item) => ({
      ...item,
      children: buildTree(folders, item.id),
    }));
  //   const branches = folders.find(({ parentId }) => parentId === pId);
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
  const folders = await getBreweryFolders(breweryId);
  const tree = createFolderTree(folders);
  return (
    <div>
      FolderTree
      <Tree src={tree[0]} />
    </div>
  );
}
