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
const HopIngredientModal = dynamic(
  () => import("./IngredientModals/HopIngredientModal"),
);

export default function RecipeModals({}: {}) {
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
  // console.log({ type, id });
  return (
    <div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>Dialog {type}</DialogHeader>
          {type === "hop" && <HopIngredientModal />}
          {type === "fermentable" && <FermentableIngredientModal />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
/**
      <_Dialog.Root
        // handle={handle}
        // open={open}
        triggerId={triggerId}
        onOpenChange={handleOpenChange}
      >
        <_Dialog.Portal>
          <_Dialog.Backdrop className={styles.Backdrop} />
          <_Dialog.Viewport className={styles.Viewport}>
            <_Dialog.Popup className={styles.Popup}>
              <_Dialog.Title className={styles.Title}>
                Add {triggerId}
              </_Dialog.Title>

              {triggerId === "hop" && (
                <HopIngredientModal
                  recipe={src!}
                  handleClose={handleDialogOpen()}
                />
              )}
              {triggerId === "fermentable" && (
                <FermentableIngredientModal
                  recipe={src!}
                  handleClose={handleDialogOpen()}
                />
              )}
            </_Dialog.Popup>
          </_Dialog.Viewport>
        </_Dialog.Portal>
      </_Dialog.Root>
    </div>
*/
