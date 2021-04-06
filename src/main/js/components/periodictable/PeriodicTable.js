import React, { useState } from 'react';

import Container from '../container/Container';
import Element from './ElementOfTable';
import styles from '../../css/components/periodictable/PeriodicTable.module.css';

export default function PeriodicTable ({size = "lg"}) {
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
        <Container className={`${styles.wrapper} ${styles[size]}`}>
            <div className={styles.table}>
                <Element setShowInfo={setInfoElement} elementNum="1" />
                <Element setShowInfo={setInfoElement} elementNum="2" />
                <Element setShowInfo={setInfoElement} elementNum="3" />
                <Element setShowInfo={setInfoElement} elementNum="4" />
                { infoElement.showInfo=== true && (
                    <>
                        <Container className={`${styles.element} ${styles[infoElement.element.category.split(" ")[0]]}`}>
                            <div className={styles.number}>{infoElement.element.number}</div>
                            <div className={styles.symbol}>{infoElement.element.symbol}</div>
                            <div className={styles.elementName}>{infoElement.element.name}</div>
                        </Container>
                        <Container className={styles.information}>                           
                            <h1 className={styles.hone}>{infoElement.element.name}</h1>
                            <span className={`${styles.categ} ${infoElement.element.category}`}>{infoElement.element.category}</span>
                            <div className={styles.atom}>
                                <span>Atomic Mass: {infoElement.element.atomic_mass} | </span>
                                <span>Density: {infoElement.element.density}</span>
                                {infoElement.element.molar_heat && <span> | Molar Heat: {infoElement.element.molar_heat}</span> }
                                {infoElement.element.melt && <span> | Melt: {infoElement.element.melt}K</span> }
                                {infoElement.element.boil && <span> | Boil: {infoElement.element.boil}K</span> }
                            </div>
                            {infoElement.element.appearance && (
                                <div className={styles.appearance}>
                                <strong>Appearance:</strong> {infoElement.element.appearance}
                                </div>
                            )}
                        </Container>
                    </>
                )}
                {middleRows}                
            </div>
        </Container>
    )
}