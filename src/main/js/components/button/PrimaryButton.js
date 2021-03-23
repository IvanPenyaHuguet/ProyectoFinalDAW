import React from "react";
import styles from "../../css/components/button/PrimaryButton.module.css";

/**
 * React reusable component for main buttons
 * @param {onClick, children} Props onClick function and children components 
 * @returns 
 */
export default function ( {onClick, children}) {
  return (
    <button type="button" className={styles.mainButton} onClick={onClick}>
      {children}
    </button>
  );
}
