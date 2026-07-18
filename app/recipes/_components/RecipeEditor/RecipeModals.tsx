"use client";
import React, { useContext } from "react";
import { Dialog as _Dialog } from "@base-ui/react";
import { ModalContext } from "@/contexts/ModalContext";
import styles from "./IngredientSection.module.css";
import dynamic from "next/dynamic";
import { RecipeType } from "@/types/Recipe";
const HopIngredientModal = dynamic(
  () => import("./IngredientModals/HopIngredientModal"),
  { ssr: false },
);

export default function RecipeModals({ src }: { src: RecipeType }) {
  const { open, handleDialogOpen, triggerId } = useContext(ModalContext);
  return (
    <div>
      <_Dialog.Root
        // handle={demoDialog}
        open={open}
        triggerId={triggerId}
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
                  recipe={src}
                  handleClose={handleDialogOpen()}
                />
              )}
              {triggerId === "fermentable" && (
                <HopIngredientModal
                  recipe={src}
                  handleClose={handleDialogOpen()}
                />
              )}
            </_Dialog.Popup>
          </_Dialog.Viewport>
        </_Dialog.Portal>
      </_Dialog.Root>
    </div>
  );
}
