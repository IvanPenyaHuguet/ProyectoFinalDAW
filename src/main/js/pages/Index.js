import React from "react";
import Container from "../components/container/MUIContainer";
import IndexButton from "../components/button/IndexButton";
import PeriodicTable from '../components/periodictable/PeriodicTable';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({    
  container: {
    margin: '10px 0',
    padding: '20px'
  } 
}));


export default function Index() {  
  const classes = useStyles();
  
  return (
    <>
    <Grid container direction='row' spacing={4}>
        <IndexButton url="/reagent/all" title="Todos los reactivos" description="Muestra todos los reactivos" />
        <IndexButton url="/reagent/organic" title="Reactivos Orgánicos" description="Muestra los reactivos orgánicos"/>
        <IndexButton url="/reagent/inorganic" title="Reactivos Inorgánicos" description="Muestra los reactivos inorgánicos"/>
        <IndexButton url="/solution/water" title="Soluciones Acuosas" description="Muestra las soluciones en medio acuoso"/>
        <IndexButton url="/solution/organic" title="Soluciones Orgánicas" description="Muestra las soluciones en medio orgánico"/>        
    </Grid> 
      <Paper m={2} className={classes.container}>
        <PeriodicTable />
      </Paper>
    </>     
    
  );
}
