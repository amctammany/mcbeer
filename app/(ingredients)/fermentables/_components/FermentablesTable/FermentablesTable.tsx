"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Header } from "@/components/DataTable/Header";
import Link from "next/link";
import slugify from "@/lib/slugify";
import { FermentablesTableRowActions } from "./FermentablesTableRowActions";
import { DataTable } from "@/components/DataTable";
// import { BookType } from "lucide-react";
export const columns: ColumnDef<FermentableType>[] = [
  {
    accessorKey: "name",
    header: Header<FermentableType>,
    size: 240,
    cell: ({ getValue }) => (
      <Link
        className="hover:underline w-8"
        prefetch={false}
        href={`/fermentables/${slugify(getValue<string>() || "", {
          lower: true,
        })}`}
      >
        {getValue<string>()}
      </Link>
    ),
  },
  {
    accessorKey: "color",
    header: Header<FermentableType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "maxUsage",
    header: Header<FermentableType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "potential",
    header: Header<FermentableType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "country",
    header: Header<FermentableType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: FermentablesTableRowActions<FermentableType>,
  },
];
import React, { Suspense, use } from "react";
import { FermentableType } from "@/types/Ingredient";
export interface FermentablesTableProps {
  src: Promise<FermentableType[]>;
}

export const FermentablesTable: React.FC<FermentablesTableProps> = ({
  src,
}) => {
  "use no memo";
  const data = use(src);
  return (
    <div>
      <div className="relative overflow-auto">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
};
export default FermentablesTable;
