"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Header } from "@/components/DataTable/Header";
import Link from "next/link";
import slugify from "slugify";
import { StylesTableRowActions } from "./StylesTableRowActions";
import { DataTable } from "@/components/DataTable";
// import { BookType } from "lucide-react";
const columns: ColumnDef<Style>[] = [
  {
    accessorKey: "identifier",
    header: Header<Style>,
    size: 118,
    cell: ({ getValue }) => (
      <Link
        className="hover:underline w-8"
        prefetch={false}
        href={`/styles/${slugify(getValue<string>(), { lower: true })}`}
      >
        {getValue<string>()}
      </Link>
    ),
  },

  {
    accessorKey: "name",
    size: 200,
    header: Header<Style>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: StylesTableRowActions<Style>,
  },
];
import React from "react";
import { Style } from "@/generated/prisma/client";
export interface StylesTableProps {
  src: Style[];
}
export const StylesTable: React.FC<StylesTableProps> = ({ src }) => {
  return (
    <div>
      <div className="relative overscroll-contain">
        <DataTable data={src} columns={columns} />
      </div>
    </div>
  );
};
export default StylesTable;
