import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import { elements } from "./DataPeriodicTable";

import styles from '../../css/components/periodictable/Elements.module.css';


export default function ElementOfTable ({ setShowInfo, elementNum }) {
    const [ infoPop, setInfoPop] = useState(false);
    const element = elements[elementNum];
    const [ hovered, setHovered ] = useState(false);

    const onMouseEnter = () => {
        setShowInfo({
            showInfo: true,
            element: element
        });
        setHovered(true);
    }
    const onMouseLeave = () => {
        setShowInfo({
            showInfo: false, 
            element: {}
        });
        setHovered(false);       
    }
    const onClick = () => {
        setInfoPop(true);
    }
    const category = element.category.split(" ")[0];
    
    

    return (
        <div
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            onClick={onClick} 
            className={`${styles.element} ${styles["element-"+elementNum]} ${styles[category]} ${hovered===true ? styles.active : ''}`}>
                <div className={styles.number}>{element.number}</div>
                <div className={styles.symbol}>{element.symbol}</div>
        </div>
    )




}