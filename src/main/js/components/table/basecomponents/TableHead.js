import React from "react";

import MUITableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Styles from '../../../css/components/table/base/TableHead.module.css';

export default function TableHead({ headerGroups }) {

  return (
    <MUITableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <TableCell
              {...column.getHeaderProps()}           
            >
              <div className={Styles.cell}>
                <div {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <strong>{column.render("Header")}</strong>
                  {column.canSort=== true && 
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? "desc" : "asc"}
                    />              
                  }
                </div>
                {column.canFilter === true && column.render('Filter') }
              </div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MUITableHead>
  );
}
