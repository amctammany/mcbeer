import { LinkButton } from "@/components/Button/LinkButton";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, ChevronRightIcon, FolderIcon } from "lucide-react";
import React from "react";

export type TreeProps<
  S extends { name?: string; pathname?: string },
  T extends S & { children: T[] } = S & { children: [] },
> = {
  src: T;
};
export default function Tree<
  S extends { name?: string; pathname?: string },
  T extends S & { children: T[] },
>({ src }: TreeProps<S, T>) {
  const renderBranch = (branch: T) => {
    return branch.children.length ? (
      <Collapsible key={branch.name} className="group/collapsible">
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="transition-transform duration-200 group-data-open/collapsible:rotate-90" />
              {/* <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" /> */}
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
    ) : (
      <LinkButton
        key={branch.name}
        href={`/recipes/dir/${branch.pathname}`}
        variant="ghost"
        size="sm"
        className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
      >
        {/* <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" /> */}
        <FolderIcon />
        {branch.name}
      </LinkButton>
    );
  };
  return (
    <div>
      <div className="flex flex-col gap-1">
        {(src.children ?? []).map((item) => renderBranch(item))}
      </div>
    </div>
  );
}
