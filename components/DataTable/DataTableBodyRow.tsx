import { flexRender, Row } from "@tanstack/react-table";
import { TableCell, TableRow } from "../ui/table";
import { VirtualItem, Virtualizer } from "@tanstack/react-virtual";

interface DataTableBodyRowProps {
  row: Row<any>;
  virtualRow: VirtualItem;
  rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
}

export function DataTableBodyRow({
  row,
  virtualRow,
  rowVirtualizer,
}: DataTableBodyRowProps) {
  return (
    <TableRow
      className="flex absolute w-full "
      style={{ transform: `translateY(${virtualRow.start}px)` }}
      data-index={virtualRow.index}
      ref={(node) => rowVirtualizer.measureElement(node)}
      key={row.id}
      //                    style={{ transform: `translateY(${virtualRow.start}px)` }}
      data-state={row.getIsSelected() && "selected"}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          style={{ width: cell.column.getSize() }}
          className="flex my-auto not-first:px-6"
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}
