import React from "react";

import MUITableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export default function TableHead({ headerGroups }) {
  return (
    <MUITableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <TableCell
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              <TableSortLabel
                active={column.isSorted}
                direction={column.isSortedDesc ? "desc" : "asc"}
              >
                {column.render("Header")}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MUITableHead>
  );
}