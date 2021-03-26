import React from "react";


const ErrorAlert = ({ title, text, timer = 4000}) => {

    const animationEnd = (element, timer) => {
        setTimeout(() => {
          element.classList.replace("fadeInDown", "fadeOutUp");
          element.addEventListener("animationend", () => element.remove());
          element.removeEventListener("animationend", () => element.remove());
        }, timer);
    };
    const main = document.getElementsByTagName("main")[0];

    const html = ReactDOMServer.renderToStaticMarkup(
        <div className={className}>
          <div className="iconWrapperAlert">
            <TypeSvg type={type} className="h-5" />
          </div>
          <div className="wrapperAlert">
            <span>{title}</span>
            {messages}
          </div>
          <a className="closeAlert hvr-icon-pulse-grow">
            <CloseSvg className="h-4 hvr-icon" />
          </a>
        </div>
    );
    main.insertAdjacentHTML("afterbegin", html);
}
export default ErrorAlert;