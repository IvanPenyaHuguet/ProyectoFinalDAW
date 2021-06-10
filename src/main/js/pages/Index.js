import React from "react";
import IndexButton from "../components/button/IndexButton";
import PeriodicTable from '../components/periodictable/PeriodicTable';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({    
  container: {
    margin: '10px 0',
    padding: '20px'
  },
  solvegrid: {
    width: '100%',
    margin: 0
  } 
}));


export default function Index() {  
  const classes = useStyles();
  const { t } = useTranslation();
  
  return (
    <>
    <Grid container direction='row' spacing={4} className={classes.solvegrid}>
        <IndexButton url="/reagent/all" title={t('index.title.reagentall')} description={t('index.description.reagentall')} />
        <IndexButton url="/reagent/organic" title={t('index.title.reagentorganic')} description={t('index.description.reagentorganic')} />
        <IndexButton url="/reagent/inorganic" title={t('index.title.reagentinorganic')} description={t('index.description.reagentinorganic')}/>
        <IndexButton url="/solution/water" title={t('index.title.solacuosas')} description={t('index.description.solacuosas')}/>
        <IndexButton url="/solution/organic" title={t('index.title.solorganic')} description={t('index.description.solorganic')}/>  
        <IndexButton url="/reagent/add" title={t('index.title.add')} description={t('index.description.add')}/>      
    </Grid> 
      {/* <Paper m={2} className={classes.container}>
        <PeriodicTable />
      </Paper> */}
    </>     
    
  );
}
