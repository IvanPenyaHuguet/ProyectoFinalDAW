import React, { useContext } from "react";

import MUITableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { ResponsiveContext } from '../../../context/utils/ResponsiveContext';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
  cell: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
}));

export default function TableHead({ headerGroups }) {
  const classes = useStyles();
  const { resolution } = useContext(ResponsiveContext);  

  return (
    <MUITableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <TableCell
              {...column.getHeaderProps()}           
            >
              <div className={classes.cell}>
                <div {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <strong>{column.render("Header")}</strong>
                  {(column.canSort=== true && resolution==='xl' ) && 
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
