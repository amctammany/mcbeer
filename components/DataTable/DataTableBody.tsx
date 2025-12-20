import { Row, Table } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { DataTableBodyRow } from "./DataTableBodyRow";
import { useEffect, useState } from "react";

interface TableBodyProps<T = any> {
  table: Table<T>;
  tableContainerRef: React.RefObject<HTMLDivElement>;
}

export function DataTableBody({ table, tableContainerRef }: TableBodyProps) {
  // "use no memo";
  const { rows } = table.getRowModel();
  const columns = table.getAllColumns();
  const [loaded, reset] = useState<boolean>(false);
  useEffect(() => {
    if (tableContainerRef.current && !loaded) {
      reset(true);
    }
  }, [tableContainerRef]);
  // Important: Keep the row virtualizer in the lowest component possible to avoid unnecessary re-renders.
  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 25,
  });
  return tableContainerRef.current ? (
    <TableBody
      className="grid relative overflow-auto h-[380px]"
      style={{ height: rowVirtualizer.getTotalSize() }}
    >
      {table.getRowModel().rows?.length ? (
        rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const row = table.getRowModel().rows[virtualRow.index] as Row<any>;
          return (
            <DataTableBodyRow
              key={row.id}
              row={row}
              virtualRow={virtualRow}
              rowVirtualizer={rowVirtualizer}
            />
          );
        })
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  ) : (
    <TableBody>
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
          Loading...
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
