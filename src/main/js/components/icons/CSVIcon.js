import React from "react"

function CSVIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 22} height={props.height || 22}
      style={{fill: 'currentColor'}}
      viewBox="0 0 548.29 548.291"
      {...props}
    >
      <path d="M486.2 196.121h-13.164V132.59c0-.399-.064-.795-.116-1.2-.021-2.52-.824-5-2.551-6.96L364.656 3.677c-.031-.034-.064-.044-.085-.075-.629-.707-1.364-1.292-2.141-1.796a8.528 8.528 0 00-.704-.419 11.262 11.262 0 00-2.121-.893c-.199-.052-.377-.134-.576-.188-.8-.188-1.629-.306-2.467-.306H96.757C84.893 0 75.256 9.649 75.256 21.502v174.613H62.093c-16.972 0-30.733 13.756-30.733 30.73v159.81c0 16.966 13.761 30.736 30.733 30.736h13.163V526.79c0 11.854 9.637 21.501 21.501 21.501h354.777c11.853 0 21.502-9.647 21.502-21.501V417.392H486.2c16.966 0 30.729-13.764 30.729-30.731v-159.81c.001-16.979-13.763-30.73-30.729-30.73zM96.757 21.502H345.81v110.006c0 5.94 4.818 10.751 10.751 10.751h94.973v53.861H96.757V21.502zM258.618 313.18c-26.68-9.291-44.063-24.053-44.063-47.389 0-27.404 22.861-48.368 60.733-48.368 18.107 0 31.447 3.811 40.968 8.107l-8.09 29.3c-6.43-3.107-17.862-7.632-33.59-7.632-15.717 0-23.339 7.149-23.339 15.485 0 10.247 9.047 14.769 29.78 22.632 28.341 10.479 41.681 25.239 41.681 47.874 0 26.909-20.721 49.786-64.792 49.786-18.338 0-36.449-4.776-45.497-9.77l7.38-30.016c9.772 5.014 24.775 10.006 40.264 10.006 16.671 0 25.488-6.908 25.488-17.396-.005-10.01-7.632-15.721-26.923-22.619zM69.474 302.692c0-54.781 39.074-85.269 87.654-85.269 18.822 0 33.113 3.811 39.549 7.149l-7.392 28.816c-7.38-3.084-17.632-5.939-30.491-5.939-28.822 0-51.206 17.375-51.206 53.099 0 32.158 19.051 52.4 51.456 52.4 10.947 0 23.097-2.378 30.241-5.238l5.483 28.346c-6.672 3.34-21.674 6.919-41.208 6.919-55.5.001-84.086-34.551-84.086-80.283zm382.06 218.27H96.757v-103.57h354.777v103.57zm-24.016-140.379h-42.399l-51.45-160.536h39.787l19.526 67.894c5.479 19.046 10.479 37.386 14.299 57.397h.709c4.048-19.298 9.045-38.352 14.526-56.693l20.487-68.598h38.599l-54.084 160.536z" />
    </svg>
  )
}

export default CSVIcon