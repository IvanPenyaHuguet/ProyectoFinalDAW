import React, { useContext } from 'react';

import { Field, FieldArray } from 'formik';
import { Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem'
import { SupplierStore } from '../../context/store/SuppliersStore';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Container from '../container/BoxContainer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../button/ButtonPrincipal';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const useStyles = makeStyles((theme) => ({    
    input: {
      width: '300px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    form: {
        width: '100%'
    },
    bgroup: {
        height: '30px',
        width: '30px'        
    },
    but: {
        fontSize: '25px',
        fontWeight: 'bolder'
    }

}));


export default function SuppliersInput ({ values, ...props}) {

    const { t } = useTranslation(); 
    const store = useContext(SupplierStore);
    const classes = useStyles();
    
    const menuItems = store.map( (item, ind) => {        
        return <MenuItem key={ item.viewOrder ? item.viewOrder : ind } value={ item }>{item.name}</MenuItem>
    });

    return (
        <>
            <FieldArray                                             
                name="suppliers"
                render = { ({remove, insert}) => ( 
                    <Container>                    
                        {  values.suppliers.map( (val, ind) => (
                            <Container key={ind}  className={classes.input}>                            
                                <FormControl className={classes.form}>
                                    <InputLabel htmlFor={`input-suppliers-${ind}`}>{t('form.label.supplier')}</InputLabel>                            
                                    <Field                                    
                                        component={Select}               
                                        name={`suppliers.${ind}`}                            
                                        inputProps={{
                                            id: "input-suppliers-"+ind                                    
                                        }}                                                                 
                                    >  
                                        { menuItems }
                                    </Field>
                                </FormControl>
                                <ButtonGroup variant="outlined" size="small" className={classes.bgroup}>
                                    <Button                                    
                                        onClick={() => remove(ind)}
                                        className={classes.but}
                                    >
                                    -
                                    </Button>
                                    <Button                                    
                                        onClick={() => insert(ind, 1)}
                                        className={classes.but}
                                    >
                                        +
                                    </Button> 
                                </ButtonGroup>
                            </Container>
                        ))} 
                                              
                    </Container>
                 )}                
            >                
            </FieldArray>
        
        </>
    )

}