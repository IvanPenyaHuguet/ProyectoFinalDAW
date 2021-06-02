import React, { useState, useEffect, useContext } from 'react';
import Container from '../container/MUIContainer';
import Title from '../general/titles/Title';

import TypeAddSelect from './TypeAddSelect';
import InorganicReagentAddFormat from './InorganicReagentAddFormat';
import OrganicReagentAddFormat from './OrganicReagentAddFormat';
import AqueousSolAddFormat from './AqueousSolAddFormat';
import OrganicSolAddFormat from './OrganicSolAddFormat';

import { useTranslation } from 'react-i18next';
import { TableContext  } from '../../context/utils/TableContext';
import { makeStyles } from '@material-ui/core/styles';
import RefMaskStoreProvider from '../../context/store/RefMaskStore';


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
        justifyContent: 'flex-start',
        margin: '10px 5px 30px'      
    },
    addselect: {
        width: '300px',
        margin: '0 100px',
    }    

}));

export default function AddReagentComponent () {

    const { t } = useTranslation();
    const classes = useStyles();
    const cont = useContext(TableContext);        
    const [ addContext, setAddContext ] = useState(cont);

    

    return (
        <RefMaskStoreProvider>
            <Container className={classes.container}>
                <Container className={classes.conttitle}>
                    <Title>{t('reagent.add.title')}</Title>
                    <TypeAddSelect typeSelectValue={addContext} setTypeSelectValue={setAddContext} className={classes.addselect}/>
                </Container>
                <Container className={classes.container}>
                    {addContext === 'InorganicReagent' && <InorganicReagentAddFormat />}
                    {addContext === 'OrganicReagent' && <OrganicReagentAddFormat />}  
                    {addContext === 'AqueousSol' && <AqueousSolAddFormat />}  
                    {addContext === 'OrganicSol' && <OrganicSolAddFormat />}            
                </Container>
            </Container>
        </RefMaskStoreProvider>
    )
}