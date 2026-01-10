"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Header } from "@/components/DataTable/Header";
import Link from "next/link";
import { DataTable } from "@/components/DataTable";
// import { BookType } from "lucide-react";
const columns: ColumnDef<YeastType>[] = [
  {
    accessorKey: "name",
    header: Header<YeastType>,
    size: 240,
    cell: ({ getValue, row }) => (
      <Link
        className="hover:underline w-8"
        prefetch={false}
        href={`/yeasts/${row.original.slug}`}
      >
        {getValue<string>()}
      </Link>
    ),
  },
  {
    accessorKey: "attenuation",
    header: Header<YeastType>,
    cell: ({ getValue }) => <span>{getValue<number>()}</span>,
  },
  {
    accessorKey: "flocculation",
    header: Header<YeastType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "tolerance",
    header: Header<YeastType>,
    cell: ({ getValue }) => <span>{getValue<number>() * 1}</span>,
  },
  {
    accessorKey: "country",
    header: Header<YeastType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: YeastsTableRowActions<YeastType>,
  },
];
import React, { use } from "react";
import { YeastType } from "@/types/Ingredient";
import { YeastsTableRowActions } from "./YeastsTableRowActions";
export interface YeastsTableProps {
  src: Promise<YeastType[]>;
}
export const YeastsTableSkeleton: React.FC = () => {
  return (
    <div>
      <div className="relative overflow-auto">
        <DataTable data={[]} columns={columns} />
      </div>
    </div>
  );
};
export const YeastsTable: React.FC<YeastsTableProps> = ({ src }) => {
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
export default YeastsTable;
