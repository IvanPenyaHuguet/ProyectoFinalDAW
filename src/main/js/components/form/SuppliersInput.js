import React, { useContext } from 'react';

import { useFormikContext, Field, FieldArray } from 'formik';
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
import FormHelperText from '@material-ui/core/FormHelperText';




const useStyles = makeStyles((theme) => ({    
    input: {      
      display: 'flex',      
      justifyContent: 'start',
      flexDirection: 'row',
      width: '250px'    
    },
    form: {
        width: '100%'
    },
    bgroup: {
        height: '30px', 
        margin: '20px 0'             
    },
    but: {
        fontSize: '25px',
        fontWeight: 'bolder'
    },
    select: {
        zIndex: '4000 !important',
    }

}));


export default function SuppliersInput ({ values, ...props}) {

    const { t } = useTranslation(); 
    const store = useContext(SupplierStore);
    const { touched, errors } = useFormikContext();
    const classes = useStyles();
    
    const menuItems = store.map( (item, ind) => {        
        return <MenuItem  key={ item.viewOrder ? item.viewOrder : ind } value={ JSON.stringify(item) }>{item.name}</MenuItem>
    });

    return (
        <>
            <FieldArray                                             
                name="suppliers"
                render = { ({remove, insert}) => ( 
                    <>                    
                        {  values.suppliers.map( (val, ind) => (
                            <Container key={ind}  className={classes.input}>                            
                                <FormControl className={classes.form} error= {touched.suppliers && touched.suppliers[ind] && errors.suppliers && errors.suppliers[ind] ? true : false}>
                                    <InputLabel htmlFor={`input-suppliers-${ind}`}>{t('form.label.supplier')}</InputLabel>                            
                                    <Field                                    
                                        component={Select}               
                                        name={`suppliers.${ind}`}                            
                                        inputProps={{
                                            id: "input-suppliers-"+ind                                   
                                        }}      
                                        aria-describedby={`error-suppliers-${ind}`}                                                                                                                                                                               
                                    >  
                                        { menuItems }
                                    </Field>
                                    {errors.suppliers && errors.suppliers[ind] && touched.suppliers && <FormHelperText id={`error-suppliers-${ind}`}>{errors.suppliers[ind]}</FormHelperText>}
                                </FormControl>
                                <ButtonGroup variant="outlined" size="small" className={classes.bgroup}>
                                    <Button                                    
                                        onClick={() => remove(ind)}
                                        className={classes.but}
                                        disabled={values.suppliers.length == 1}
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
                                              
                    </>
                 )}                
            >                
            </FieldArray>
        
        </>
    )

}