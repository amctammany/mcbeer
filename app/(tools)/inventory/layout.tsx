import IconButton from "@/components/Button/IconButton";
import { TopBar } from "@/components/TopBar/TopBar";
import { Upload } from "lucide-react";
import React, { Suspense } from "react";

export default function InventoryLayout({ children }: { children: any }) {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Inventory" }]}>
        <IconButton icon={Upload} href={"/inventory/update"}>
          Update
        </IconButton>
      </TopBar>
      <Suspense fallback={<div>Loading Inventory</div>}>{children}</Suspense>
    </div>
  );
}
