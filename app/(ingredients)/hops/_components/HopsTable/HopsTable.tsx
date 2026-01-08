"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Header } from "@/components/DataTable/Header";
import Link from "next/link";
import slugify from "@/lib/slugify";
import { HopsTableRowActions } from "./HopsTableRowActions";
import { DataTable } from "@/components/DataTable";
// import { BookType } from "lucide-react";
const columns: ColumnDef<HopType>[] = [
  {
    accessorKey: "name",
    header: Header<HopType>,
    size: 240,
    cell: ({ getValue }) => (
      <Link
        className="hover:underline w-8"
        prefetch={false}
        href={`/hops/${slugify(getValue<string>() || "", {
          lower: true,
        })}`}
      >
        {getValue<string>()}
      </Link>
    ),
  },
  {
    accessorKey: "alpha",
    header: Header<HopType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "beta",
    header: Header<HopType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "cohumulone",
    header: Header<HopType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "country",
    header: Header<HopType>,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: HopsTableRowActions<HopType>,
  },
];
import React, { use } from "react";
import { HopType } from "@/types/Ingredient";
export interface HopsTableProps {
  src: Promise<HopType[]>;
}
export const HopsTableSkeleton: React.FC = () => {
  return (
    <div>
      <div className="relative overflow-auto">
        <DataTable data={[]} columns={columns} />
      </div>
    </div>
  );
};
export const HopsTable: React.FC<HopsTableProps> = ({ src }) => {
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
export default HopsTable;
