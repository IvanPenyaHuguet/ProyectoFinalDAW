import React from "react";
import Container from "../container/Container";
import styles from "../../css/components/layout/Header.module.css";
import HeaderButtonGroup from "../nav/HeaderButtonGroup";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Typography from '@material-ui/core/Typography';


/**
 * React component for the header bar
 * @param {children} children Children components from props
 * @returns
 */

export default function Header({ children }) {
    const { t } = useTranslation();
  return (
    <header className={styles.bar}>
      <Container className={styles.container}>
        <div className={styles.div}>
          <Link to="/chemdata" className={styles.title}>
            <Typography variant="h2" component="h1" className={styles.title}>LARS</Typography>
          </Link>
          <Container className={styles.subtitle}>
            <Typography variant="h6" component="h2">{t('general.by')} Iván Peña Huguet</Typography>
          </Container>
        </div>
        <HeaderButtonGroup />
      </Container>
    </header>
  );
}
