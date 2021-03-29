import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";


export default function TablePaginationActions(props) {
  
  const { count, page, rowsPerPage, onChangePage } = props;

  const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),          
    },
  }));
  const classes = useStyles1();

  const handleFirstPageButtonClick = (e) => {
    onChangePage(e, 0);
  };

  const handleBackButtonClick = (e) => {
    onChangePage(e, page - 1);
  };

  const handleNextButtonClick = (e) => {
    onChangePage(e, page + 1);
  };

  const handleLastPageButtonClick = (e) => {
    onChangePage(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0 }
        aria-label="Primera página"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0 }
        aria-label="Página anterior"
      >        
          <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Página siguiente"
      >        
          <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Última página"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
}
