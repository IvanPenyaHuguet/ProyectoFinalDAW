import React from 'react';
import Nav from "../nav/Nav";
import Header from "./Header";
import styles from "../../css/components/layout/Layout.module.css";
import Container from "../container/Container";

export default function Layout (props) {
    return (
      <>        
        <div className="AppContent">            
            <Nav>
              <Header />
              <main className="mainApplication">
                <Container className={styles.layout}>
                  { props.children }
                </Container>                
              </main>              
            </Nav>            
        </div>
      </>  
    );
}