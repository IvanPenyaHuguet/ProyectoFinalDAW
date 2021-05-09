import React, { useState, useContext } from 'react';
import Container from '../container/MUIContainer';
import Title from '../general/titles/Title';

import TypeAddSelect from './TypeAddSelect';
import InorganicReagentAddFormat from './InorganicReagentAddFormat';

import { useTranslation } from 'react-i18next';
import { TableContext  } from '../../context/utils/TableContext';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    container: {
      width: '100%',
      maxWidth: '100%'    
    },
    conttitle: {
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'        
    },
    addselect: {
        width: '300px',
        margin: '0 100px',
    }    

}));

export default function AddReagentComponent () {

    const { t } = useTranslation();
    const classes = useStyles();
    const tableStrContext = useContext(TableContext);
    const [ addContext, setAddContext ] = useState(tableStrContext);
    

    return (
        <Container className={classes.container}>
            <Container className={classes.conttitle}>
                <Title>{t('reagent.add.title')}</Title>
                <TypeAddSelect typeSelectValue={addContext} setTypeSelectValue={setAddContext} className={classes.addselect}/>
            </Container>
            <Container className={classes.container}>
                {addContext === 'InorganicReagent' && <InorganicReagentAddFormat />}
                                
            </Container>
        </Container>
    )
}