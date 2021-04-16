import React, {  useContext } from 'react';

import AddIcon from '@material-ui/icons/Add';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../context/AuthContextProvider';
import styles from '../../../css/components/table/ButtonMenuTable.module.css';
import Container from '../../container/Container';

const useStyles = makeStyles((theme) => ({    
    speedDial: {
      position: 'absolute',
      top: 0,
      left: 0         
    },
}));


export default function ButtonMenuTable () {

    const { t } = useTranslation();
    const { user, setUSer } = useContext(AuthContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const actions = [        ,
        { icon: <SaveIcon />, name: t('table.tooltip.save') },
        { icon: <PrintIcon />, name: t('table.tooltip.print') },
    ];    
    if (user.role.includes("ROLE_ADD_ALL")) {       
        actions.unshift({ icon: <AddIcon /> , name: t('table.tooltip.add') });
    }
    const handleClose = () => {
        setOpen(false);
    };    
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Container className={styles.container}>          
            <SpeedDial
                ariaLabel={t('table.tooltip.export')}                                       
                icon={<SpeedDialIcon />}
                FabProps={{size: "medium"}}                
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction="down"
                className={classes.speedDial}
                >
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={handleClose}
                    tooltipOpen
                    />
                ))}
            </SpeedDial>            
        </Container>
    )
}