import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    noline: {
        textDecoration: 'none'
    },
    item: {
        backgroundColor: 'var(--var-grey-color)'
    } 
}));

/**
 * Main reusable buttons for the index page
 * @param {children, title, url, description} props
 * @returns
 */
export default function IndexButton({
  title = "",
  url,
  description = "",
  avatar = "",
  ...props
}) {

    const classes = useStyles();
  return (
    <Grid item lg={4} xl={3} md={6} xs={12}>
      <Link to={url} className={classes.noline} >
        <Card {...props} className={classes.item}>
          <CardHeader avatar={avatar} title={title}></CardHeader>
          <CardContent >{description}</CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
