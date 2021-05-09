import React from "react";

export default function USFlag({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 7410 3900"
      width={width}
      height={height}
    >
      <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
      <path
        stroke="#fff"
        strokeWidth="300"
        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
      ></path>
      <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path
                  id="a"
                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                ></path>
                <use y="420" xlinkHref="#a"></use>
                <use y="840" xlinkHref="#a"></use>
                <use y="1260" xlinkHref="#a"></use>
              </g>
              <use y="1680" xlinkHref="#a"></use>
            </g>
            <use x="247" y="210" xlinkHref="#b"></use>
          </g>
          <use x="494" xlinkHref="#c"></use>
        </g>
        <use x="988" xlinkHref="#d"></use>
        <use x="1976" xlinkHref="#c"></use>
        <use x="2470" xlinkHref="#e"></use>
      </g>
    </svg>
  );
}
