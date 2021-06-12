import React, { useState, useContext } from 'react';


import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Location from '../../../lib/entities/Location';
import {AuthContext} from "../../../context/AuthContextProvider";

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({   
    buttonContainer: {
        margin: '0 20px',
    }
}));


export default function CustomFooterDelete ({ setReload, selectionModel, loading }) {

    const [ isDeleting, setIsDeleting ] = useState(false);
    const classes = useStyles();
    const { t } = useTranslation();
    const { user } = useContext(AuthContext);
    const location = new Location();

    const handleDeleteClick = () => {
        if (selectionModel) {
            setIsDeleting(true);
            location.delete({id: selectionModel[0]})
            setReload(selectionModel[0]);
            setIsDeleting(false);
        }       
    }


    return (        
        <Button
            variant="contained"
            color="secondary"
            disabled={!user.role.includes("ROLE_DELETE_LOCATION") || isDeleting || !selectionModel || loading}
            onClick={handleDeleteClick}
            endIcon={<DeleteIcon />}
            className={classes.buttonContainer}
        >
            {t('admin.locations.delete')}
        </Button> 
        
    )
}