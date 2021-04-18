import React from 'react';
import Nav from "../nav/Nav";
import Header from "./Header";
import styles from "../../css/components/layout/Layout.module.css";
import Container from "../container/Container";
import StoresLayout from "./StoresLayout";

export default function Layout (props) {
    return (
      <>  
        <StoresLayout>   
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
        </StoresLayout>   
      </>  
    );
}