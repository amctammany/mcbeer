import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Profiles" },
          { title: "Equipment", url: "/equipment" },
        ]}
      >
        <IconButton icon={Plus} variant="outline" href="/equipment/new">
          Add
        </IconButton>
      </TopBar>
      <div className="max-w-2xl h-screen m-auto flex justify-center align-middle items-center text-center">
        <Spinner className="block size-26" />
      </div>
    </div>
  );
}
