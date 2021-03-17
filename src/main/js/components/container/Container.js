import React from "react";
import styles from "../../css/components/container/BaseContainer.module.css";
/**
 * Generic component for containers
 * @param {React.Component} children Children components
 * @param {String} className Class for the container
 */
export default function Container  ({children, className = ''}) {
	return <div className={`${styles.container} ${className}`}>{children}</div>
}