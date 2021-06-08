import React, { useContext } from "react";
import Container from "../container/Container";
import styles from "../../css/components/layout/Header.module.css";
import HeaderButtonGroup from "../nav/HeaderButtonGroup";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { makeStyles } from '@material-ui/core/styles';
import { ResponsiveContext } from '../../context/utils/ResponsiveContext';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({    
  subtitle: {
    fontFamily: "'Shadows Into Light', cursive",
    fontSize: '1rem',   
  }
}));


/**
 * React component for the header bar
 * @param {children} children Children components from props
 * @returns
 */

export default function Header({ children }) {
    const { t } = useTranslation();
    const classes = useStyles();
    const { resolution } = useContext(ResponsiveContext);    

  return (
    <header className={styles.bar}>
      <Container className={styles.container}>
        { (resolution == 'lg' || resolution == 'xl' ) && 
        <div className={styles.div}>
          <Link to="/chemdata" className={styles.title}>
            <Typography variant="h2" component="h1" className={styles.title}>LARS</Typography>
          </Link>
          {resolution == 'xl' && 
          <Container className={styles.subtitle}>
            <Typography variant="h6" component="h2" className={classes.subtitle}>{t('general.by')} Iván Peña Huguet</Typography>
          </Container>}
        </div> }
        <HeaderButtonGroup />
      </Container>
    </header>
  );
}
