import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import React from "react";
// import FermentableEditor from "../../_components/FermentableEditor/FermentableEditor";
import {
  FermentableForm,
  FermentableFormContainer,
} from "../../_components/FermentableEditor/FermentableForm";
import { BaseFermentableType } from "@/types/Ingredient";
import { updateFermentable } from "../../actions";

export default function Loading() {
  const src = { name: "Loading", slug: "loading" } as BaseFermentableType;
  return (
    <div>
      <FermentableFormContainer src={src} action={updateFermentable}>
        <TopBar breadcrumbs={[{ title: "Ingredients" }]}></TopBar>
        <FermentableForm src={{} as any} />
      </FermentableFormContainer>
    </div>
  );
}
