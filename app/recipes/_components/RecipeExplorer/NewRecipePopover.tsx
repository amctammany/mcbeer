"use client";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { RecipeFolderType } from "@/types/Recipe";
import IconButton from "@/components/Button/IconButton";
import { Plus, Save } from "lucide-react";
import { createNewRecipe } from "../../actions";

export type NewRecipePopoverProps = {
  folder: RecipeFolderType;
  userId?: string;
};

export const NewRecipePopover = ({ folder, userId }: NewRecipePopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <IconButton
            label="Add Recipe"
            icon={Plus}
            variant="outline"
            className="bg-teal-200 text-black"
          />
        }
      />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>New Folder</PopoverTitle>
        </PopoverHeader>
        <form action={createNewRecipe}>
          <FieldGroup>
            <Field
              className="bg-white rounded-md"
              orientation="responsive"
              // data-invalid={!!fieldState.error}
            >
              <FieldContent className="grid w-full gap-2 ">
                <FieldLabel htmlFor="newRecipeName">Name</FieldLabel>

                {/* <FieldDescription>{description}</FieldDescription> */}
              </FieldContent>
              <input type="text" id="newRecipeName" name="name" />
            </Field>
          </FieldGroup>

          <input type="hidden" name="recipeFolderId" value={folder?.id} />
          <input type="hidden" name="userId" value={userId} />
          {/* <input type="hidden" name="pathname" value={folder.pathname} /> */}
          <IconButton icon={Save} label="Save" type="submit" />
        </form>
      </PopoverContent>
    </Popover>
  );
};
