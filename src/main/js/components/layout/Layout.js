import React from 'react';
import Nav from "../nav/Nav";
import Header from "./Header";

export default function Layout (props) {
    return (
      <>        
        <div className="AppContent">            
            <Nav>
              <Header />
              { props.children }
            </Nav>            
        </div>
      </>  
    );
}