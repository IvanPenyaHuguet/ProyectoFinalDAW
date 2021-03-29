import React from "react";
import styles from "../../css/components/popups/ErrorAlert.module.css";
import CloseIcon from "../icons/CloseIcon";


const ErrorAlert = ({ title, text, timer = 4000}) => {

    const animationEnd = (element, timer) => {
        setTimeout(() => {
          element.classList.replace(styles.fadeInDown, styles.fadeOutUp);
          element.addEventListener("animationend", () => element.remove());
          element.removeEventListener("animationend", () => element.remove());
        }, timer);
    };
    const main = document.getElementsByTagName("main")[0];

    const html = 
        <div className={`${styles.fadeInDown}`} >
          <div className={styles.iconWrapper}>
            <TypeSvg type={type} className="h-5" />
          </div>
          <div className={styles.textWrapper}>
            <span>{title}</span>
            {messages}
          </div>
          <a className="closeAlert hvr-icon-pulse-grow">
            <CloseIcon />
          </a>
        </div>
    ;
    main.insertAdjacentHTML("afterbegin", html);

  
  for (let item of main.getElementsByClassName(className)) {
    item.onanimationend = animationEnd(item, timer);
    item.children[2].onclick = () => animationEnd(item, 0);
  }
}
export default ErrorAlert;