import React, { useEffect , useState } from 'react';

import Container from '../container/BoxContainer';
import CommentariesGroup from './CommentariesGroup';
import CommentaryInput from './CommentaryInput';

import CircularProgress from '@material-ui/core/CircularProgress';

import CommentaryService from '../../service/backend/CommentaryService';


export default function ReagentCommentaries ({row ,setAlert}) {

    const [ commentaries, setCommentaries ] = useState([]);
    const [ loading, setLoading ] = useState(false);

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
                  
    }, []);   

    return (
        <Container>
            {loading ?
                <CircularProgress />
                :
                <CommentariesGroup commentaries={commentaries}/> 
            }
            <CommentaryInput id={row.id} setAlert={setAlert}/>            
        </Container>
    )
}