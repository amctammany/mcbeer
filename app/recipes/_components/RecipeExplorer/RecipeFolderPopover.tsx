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
import { createRecipeFolder } from "../../actions";

export type RecipeFolderPopoverProps = { folder: RecipeFolderType };

export const RecipeFolderPopover = ({ folder }: RecipeFolderPopoverProps) => {
  const path = folder?.pathname;
  return (
    <Popover>
      <PopoverTrigger
        render={
          <IconButton
            label="Add Folder"
            icon={Plus}
            variant="outline"
            className="bg-green-200 text-black"
          />
        }
      />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>New Folder</PopoverTitle>
        </PopoverHeader>
        <form action={createRecipeFolder}>
          <FieldGroup>
            <Field
              className="bg-white rounded-md"
              orientation="responsive"
              // data-invalid={!!fieldState.error}
            >
              <FieldContent className="grid w-full gap-2 ">
                <FieldLabel htmlFor="newFolderName">Name</FieldLabel>

                {/* <FieldDescription>{description}</FieldDescription> */}
              </FieldContent>
              <input type="text" id="newFolderName" name="name" />
            </Field>
          </FieldGroup>

          <input type="hidden" name="parentId" value={folder?.id} />
          <input type="hidden" name="breweryId" value={folder?.breweryId} />
          <input type="hidden" name="pathname" value={folder?.pathname} />
          <IconButton icon={Save} label="Save" type="submit" />
        </form>
      </PopoverContent>
    </Popover>
  );
};
