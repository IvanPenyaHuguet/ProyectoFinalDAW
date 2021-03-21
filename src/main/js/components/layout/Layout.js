import React from 'react';
import Nav from "../nav/Nav";

export default function Layout (props) {
    return (
      <>        
        <div className="AppContent">
            <Nav>
                { props.children }
            </Nav>            
        </div>
      </>  
    );
}