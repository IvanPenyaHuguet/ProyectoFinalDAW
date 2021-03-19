import React from "react";
import styles from "../../css/components/button/SecondaryButton.module.css";

export default function ( {onClick, children}) {
  return (
    <button type="button" className={styles.mainButton} onClick={onClick}>
      {children}
    </button>
  );
}