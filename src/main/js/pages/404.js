import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function NotFound () {
    const location = useLocation();
    return (
    <>    
        <h1>ERROR 404 - Page not found</h1>
        <h3>Not found {location.pathname}.</h3>
        <Link to="/">
            Maybe you are searching for this.
        </Link>
    
    </>
    )
}