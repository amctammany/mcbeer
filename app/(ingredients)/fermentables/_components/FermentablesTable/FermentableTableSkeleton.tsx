"use client";
import { DataTable } from "@/components/DataTable";
import { columns } from "./FermentablesTable";
import { Suspense } from "react";

export const FermentablesTableSkeleton: React.FC = () => {
  return (
    <Suspense>
      <div className="relative overflow-auto">
        <DataTable data={[]} columns={columns} />
      </div>
    </Suspense>
    /**
     * 
    <Suspense
      fallback={
        <div className="max-w-2xl h-screen m-auto flex justify-center align-middle items-center text-center">
          <Spinner className="block size-26" />
        </div>
      }
    >
    </Suspense>
     */
  );
};
