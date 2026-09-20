"use client";
import React, { useContext } from "react";
import { Dialog as _Dialog } from "@base-ui/react";
import { ModalContext } from "@/contexts/ModalContext";
import styles from "./IngredientSection.module.css";
import dynamic from "next/dynamic";
import { RecipeType } from "@/types/Recipe";
import FermentableIngredientModal from "./IngredientModals/FermentableIngredientModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
} from "@/components/ui/dialog";
import { RecipeContext } from "@/contexts/RecipeContext";
import YeastIngredientModal from "./IngredientModals/YeastIngredientModal";
const HopIngredientModal = dynamic(
  () => import("./IngredientModals/HopIngredientModal"),
);

export default function RecipeModals({ recipeId }: { recipeId?: string }) {
  const a = useContext(RecipeContext);
  const context = useContext(ModalContext);
  if (!Object.keys(context).length) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  const {
    open = false,
    handleDialogOpen,
    handleOpenChange,
    handle,
    triggerId,
  } = context;
  const type =
    !triggerId || typeof triggerId === "string" ? triggerId : triggerId.type;
  const id =
    !triggerId || typeof triggerId === "string" ? undefined : triggerId.id;
  return (
    <div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>Dialog {type}</DialogHeader>
          {type === "hop" && <HopIngredientModal id={id} />}
          {type === "fermentable" && <FermentableIngredientModal id={id} />}
          {type === "yeast" && <YeastIngredientModal id={id} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
