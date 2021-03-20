import React from 'react';


export default function Layout (props) {
    return (
      <>        
        <div className="AppContent">
            { props.children }
        </div>
      </>  
    );
}