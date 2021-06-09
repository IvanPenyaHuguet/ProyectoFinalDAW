import React, {  useContext } from 'react';


import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { SpeedDialContext } from '../../../context/utils/SpeedDialContext';

import Container from '../../container/Container';

const useStyles = makeStyles((theme) => ({    
    speedDial: {
      position: 'absolute',
      top: 0,
      left: 0              
    },
    container: {
        position: 'relative',
        width: '56px',
        height: '56px',    
        margin: '0 0 0 20px',
        [theme.breakpoints.down('md')]: {
            margin: '0 0 0 5px',
        },
    }
}));


export default function ButtonMenuTable () {

    const { t } = useTranslation();    
    const  speedDial = useContext(SpeedDialContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };    
    const handleOpen = () => {
        setOpen(true);
    };
    
    if (! speedDial) {
        return;
    }

    return (
        <Container className={classes.container}>          
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
                {speedDial.map((action) => (
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.click}
                    tooltipOpen
                    />
                ))}
            </SpeedDial>            
        </Container>
    )
}