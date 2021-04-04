import { Container } from '@material-ui/core';
import React, { useState, Fragment } from 'react';

import Element from './ElementOfTable';
import { elements } from './DataPeriodicTable';
import styles from '../../css/components/periodictable/PeriodicTable.module.css';

export default function PeriodicTable () {
    const [ infoElement, setInfoElement ] = useState ({
        showInfo: false,
        element: {}
    });
    const middleRows = [];
    for (let i=5; i <= 57; i++) {
        middleRows.push(<Element setShowInfo={setInfoElement} elementNum={i} key={i}/>);
    }    
    for (let i=72; i <= 89; i++) {
        middleRows.push(<Element setShowInfo={setInfoElement} elementNum={i} key={i}/>);
    }
    for (let i=104; i <= 118; i++) {
        middleRows.push(<Element setShowInfo={setInfoElement} elementNum={i} key={i}/>);
    }
    for (let i=58; i <= 71; i++) {
        middleRows.push(<Element setShowInfo={setInfoElement} elementNum={i} key={i}/>);
    }
    for (let i=90; i <= 103; i++) {
        middleRows.push(<Element setShowInfo={setInfoElement} elementNum={i} key={i}/>);
    }

    return (
        <Container className={styles.wrapper}>
            <div className={styles.table}>
                <Element setShowInfo={setInfoElement} elementNum="1" />
                <Element setShowInfo={setInfoElement} elementNum="2" />
                <Element setShowInfo={setInfoElement} elementNum="3" />
                <Element setShowInfo={setInfoElement} elementNum="4" />
                { infoElement.showInfo=== true && (
                    <Fragment>
                        <Element elementNum={elements.indexOf(infoElement.element)} />
                    </Fragment>
                )}
                {middleRows}                
            </div>
        </Container>
    )
}