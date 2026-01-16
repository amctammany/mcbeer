import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import React from "react";
import YeastDisplay from "../_components/YeastDisplay/YeastDisplay";

export default function Loading() {
  return (
    <div>
      <TopBar
        breadcrumbs={[
          { title: "Ingredients" },
          { title: "Yeasts", url: "/yeasts" },
          { title: "Loading..." },
        ]}
      ></TopBar>
      <YeastDisplay src={{} as any} />
      <div className="max-w-2xl h-screen m-auto flex justify-center align-middle items-center text-center">
        <Spinner className="block size-26" />
      </div>
    </div>
  );
}
