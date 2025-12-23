"use client";

import {
  useVirtualizer,
  VirtualItem,
  Virtualizer,
} from "@tanstack/react-virtual";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  RowSelectionState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo, useRef, useState } from "react";
import { fuzzyFilter } from "@/lib/fuzzyFilter";
//import clsx from "clsx";
import TableSearch from "./TableSearch";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";
import { Checkbox } from "../ui/checkbox";
import { DataTableBody } from "./DataTableBody";
//import { Badge } from "../Badge";
//import { Wheat } from "lucide-react";
//import TableSelection from "./TableSelection";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  selectable?: boolean;
  filters?: any[];
  children?: React.ReactNode | React.ReactNode[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filters,
  selectable = true,
}: //children,
DataTableProps<TData, TValue>) {
  //  "use no memo";
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<any>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const table = useReactTable({
    data,
    columns: selectable
      ? [
          {
            id: "select",
            size: 24,
            header: ({ table }) => (
              <Checkbox
                checked={
                  table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                  table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
              />
            ),
            cell: ({ row }) => (
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
              />
            ),
            enableSorting: false,
            enableHiding: false,
          },
          ...columns,
        ]
      : columns,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: "fuzzy",
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      globalFilter,
      sorting,
      columnFilters,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
  });
  const onFilterChange = useMemo(
    () => (name: any, value: any) => {
      return table.getColumn(name)?.setFilterValue(value);
    },
    [table]
  );

  return (
    <div className="w-full relative h-full">
      <TableSearch table={table}>
        {filters?.map(({ name, options }) =>
          options ? (
            <FilterSelect
              key={name}
              name={name}
              value={(table.getColumn(name)?.getFilterValue() as string) ?? ""}
              options={options}
              onChange={onFilterChange}
            />
          ) : (
            <FilterInput
              key={name}
              name={name}
              value={(table.getColumn(name)?.getFilterValue() as string) ?? ""}
              onChange={onFilterChange}
            />
          )
        )}
      </TableSearch>
      <div className="relative overflow-y-auto " ref={tableContainerRef}>
        <Table className="grid relative">
          <TableHeader className="sticky grid top-0 z-1">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="*:*:sticky *:*:top-0 flex w-full"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="flex"
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <DataTableBody
            table={table}
            tableContainerRef={
              tableContainerRef as React.RefObject<HTMLDivElement>
            }
          />
        </Table>
      </div>
    </div>
  );
}
