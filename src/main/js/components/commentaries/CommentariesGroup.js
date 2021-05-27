import React from 'react';

import Container from '../container/BoxContainer';
import Commentary from './Commentary';

export default function CommentariesGroup ({commentaries}){    
    
    const commentariesItem = commentaries.map( (item ) => {        
        return <Commentary  key={ item.id } comment={item} />
    });

    return (
        <Container>
            { commentariesItem }
        </Container>
    )
}