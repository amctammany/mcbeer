import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { RecipeFolderType } from "@/types/Recipe";
import IconButton from "@/components/Button/IconButton";
import { Plus, PlusIcon, Save } from "lucide-react";
import { createRecipeFolder } from "../../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type RecipeFolderDialogProps = { folder: RecipeFolderType };

export const RecipeFolderDialog = ({ folder }: RecipeFolderDialogProps) => {
  const path = folder?.pathname;
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            // label="Add Folder"
            // icon={Plus}
            variant="outline"
            className="bg-green-200 text-black"
          />
        }
      >
        <PlusIcon /> Add Folder
      </DialogTrigger>
      <DialogContent className="max-w-12">
        <DialogHeader>
          <DialogTitle>New Folder</DialogTitle>
        </DialogHeader>

        <div className="grid ">
          <div className="w-full mx-auto max-w-md text-center justify-center border border-black rounded">
            <form action={createRecipeFolder}>
              <FieldGroup>
                <Field
                  className="w-full bg-white rounded-md"
                  orientation="responsive"
                  // data-invalid={!!fieldState.error}
                >
                  <FieldContent className="grid w-full gap-2 ">
                    <FieldLabel htmlFor="newFolderName">Name</FieldLabel>

                    {/* <FieldDescription>{description}</FieldDescription> */}
                  </FieldContent>
                  <Input
                    className="grow w-full"
                    type="text"
                    id="newFolderName"
                    name="name"
                  />
                </Field>
              </FieldGroup>

              <input type="hidden" name="parentId" value={folder?.id} />
              <input type="hidden" name="breweryId" value={folder?.breweryId} />
              <input type="hidden" name="pathname" value={folder?.pathname} />
              <IconButton icon={Save} label="Save" type="submit" />
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
