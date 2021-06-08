import React, { useEffect , useState } from 'react';

import Container from '../container/BoxContainer';
import CommentariesGroup from './CommentariesGroup';
import CommentaryInput from './CommentaryInput';

import CircularProgress from '@material-ui/core/CircularProgress';

import CommentaryService from '../../service/backend/CommentaryService';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({    
    container: {
      width: '100%',
      maxWidth: '100%',
      overflow: 'auto',
      height: '100%'
    }    
}));


export default function ReagentCommentaries ({row ,setAlert}) {

    const [ commentaries, setCommentaries ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const classes = useStyles();
    const [ updateComments, setUpdateComments ] = useState(0);

    useEffect(() => {
        setLoading(true);              
        CommentaryService.getByReagentId(row.id)
        .then( res => {  
            setCommentaries(res.data);
            setLoading(false);            
        }) 
        .catch((res) => {
            setCommentaries([]);
            setLoading(false);
        })                  
    }, [updateComments]);     

    return (
        <Container className={classes.container}>
            {loading ?
                <CircularProgress />
                :
                <CommentariesGroup commentaries={commentaries}/> 
            }
            <CommentaryInput id={row.id} setAlert={setAlert} updateComments={updateComments} setUpdateComments={setUpdateComments}/>            
        </Container>
    )
}