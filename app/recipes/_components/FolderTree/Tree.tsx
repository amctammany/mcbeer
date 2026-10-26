import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRightIcon, FolderIcon } from "lucide-react";
import React from "react";

export type TreeProps<
  S extends { name?: string },
  T extends S & { children: T[] } = S & { children: [] },
> = {
  src: T;
};
export default function Tree<
  S extends { name?: string },
  T extends S & { children: T[] },
>({ src }: TreeProps<S, T>) {
  const renderBranch = (branch: T) => {
    return (
      <Collapsible key={branch.name}>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
              <FolderIcon />
              {branch.name}
            </Button>
          }
        />
        <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
          <div className="flex flex-col gap-1">
            {branch.children.map((child) => renderBranch(child))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  };
  console.log(src);
  return (
    <div>
      Tree
      <div className="flex flex-col gap-1">
        {(src.children ?? []).map((item) => renderBranch(item))}
      </div>
    </div>
  );
}
