import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import { elements } from "./DataPeriodicTable";
import Paper from '@material-ui/core/Paper';

import styles from '../../css/components/periodictable/Elements.module.css';

import { makeStyles } from '@material-ui/core/styles';

export default function ElementOfTable ({ setShowInfo, elementNum, setSelectedElements, selectedElements }) {

    const useStyles = makeStyles((theme) => ({
        root: {
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.8)",
            opacity: "0.8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            fontWeight: "900",
            userSelect: "none"
        },
        paper: {
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,0,0,0.5)",
            opacity: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
            fontWeight: "900",
            userSelect: "none",
            color: "red"
        }
      }));
    const classes = useStyles();
    const element = elements[elementNum];
    const [ hovered, setHovered ] = useState(false);
    const [ numEle, setNumEle ] = useState(0);

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
        selectedElements[elementNum] ? setSelectedElements({...selectedElements,  [elementNum] : selectedElements[elementNum]+1 }) :  setSelectedElements({...selectedElements, [elementNum]: 1});
        setNumEle( selectedElements[elementNum] ?  selectedElements[elementNum] + 1 : 1);
    }
    const onRightClick = (e) => {
        e.preventDefault();
        if (numEle > 0) {
            selectedElements[elementNum] ? setSelectedElements({...selectedElements,  [elementNum] : selectedElements[elementNum] - 1 }) :  setSelectedElements({...selectedElements, [elementNum]: 0});
            setNumEle( selectedElements[elementNum] > 0 ?  selectedElements[elementNum] - 1 : 0);
        }
        if (numEle == 0) {
            selectedElements[elementNum] ? setSelectedElements({...selectedElements,  [elementNum] : selectedElements[elementNum] - 1 }) :  setSelectedElements({...selectedElements, [elementNum]: -1});
            setNumEle( selectedElements[elementNum] == 0 ?  selectedElements[elementNum] - 1 : -1);
        }
        console.log(selectedElements)
    }
    const category = element.category.split(" ")[0];
    
    return (
        <div
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            onClick={onClick} 
            onContextMenu={onRightClick}
            className={`${styles.element} ${styles["element-"+elementNum]} ${styles[category]} ${hovered===true ? styles.active : ''}`}>
                <div className={styles.number}>{element.number}</div>
                <div className={styles.symbol}>{element.symbol}</div>
            {numEle > 0 && <Paper className={classes.root} square>{numEle}</Paper>}
            {numEle < 0 && <Paper className={classes.paper} square>X</Paper>}
        </div>
    )




}