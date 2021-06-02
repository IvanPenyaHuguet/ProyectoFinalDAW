import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({    
    formadd: {
        display: 'grid',
        gridTemplateColumns: 'auto 900px',
        gridTemplateRows: 'auto 80px',         
    },
    fieldContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    buttonContainer: {
        margin: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        gridColumn: '1/3'
    },
    small: {
        minWidth: '40px',
        width: '40px'
    }
}));

