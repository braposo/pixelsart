import React from "react";
import { Span } from "../UI";

const trophy = ({ size, color }) => (
  <Span css={{ color }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
    >
      <g fill="currentColor" fillRule="evenodd" transform="translate(7 18)">
        <polygon points="23 8 15 8 15 15.5 15 23 23 23 23 15.5" />
        <polygon points="15 8 15 15.5 15 23 23 23 23 15.5 23 8" />
        <polygon points="23 31 31 31 31 23 23 23" />
        <polygon points="23 31 31 31 31 23 23 23" />
        <polygon points="30 38 38 38 38 30 30 30" />
        <polygon points="30 38 38 38 38 30 30 30" />
        <polygon points="68 8 60 8 60 15.5 60 23 68 23 68 15.5" />
        <polygon points="60 8 60 15.5 60 23 68 23 68 15.5 68 8" />
        <polygon points="53 31 61 31 61 23 53 23" />
        <polygon points="53 31 61 31 61 23 53 23" />
        <polygon points="45 38 53 38 53 30 45 30" />
        <polygon points="45 38 53 38 53 30 45 30" />
        <polygon points="38.2 45.667 30.6 45.667 30.6 53.333 23 53.333 23 61 61 61 61 53.333 53.4 53.333 53.4 45.667 45.8 45.667 45.8 38 38.2 38" />
        <polygon points="38.2 38 38.2 45.667 30.6 45.667 30.6 53.333 23 53.333 23 61 61 61 61 53.333 53.4 53.333 53.4 45.667 45.8 45.667 45.8 38" />
        <polygon points="68 31 76 31 76 23 68 23" />
        <polygon points="68 31 76 31 76 23 68 23" />
        <polygon points="75 8 75 15.5 75 23 83 23 83 15.5 83 8" />
        <polygon points="75 8 75 15.5 75 23 83 23 83 15.5 83 8" />
        <polygon points="68 8 76 8 76 0 68 0" />
        <polygon points="68 8 76 8 76 0 68 0" />
        <polygon points="8 8 16 8 16 0 8 0" />
        <polygon points="8 8 16 8 16 0 8 0" />
        <polygon points="8 8 0 8 0 15.5 0 23 8 23 8 15.5" />
        <polygon points="0 8 0 15.5 0 23 8 23 8 15.5 8 8" />
        <polygon points="8 31 16 31 16 23 8 23" />
        <polygon points="8 31 16 31 16 23 8 23" />
        <polygon points="38.2 8 45.8 8 53.4 8 61 8 61 0 53.4 0 45.8 0 38.2 0 30.6 0 23 0 23 8 30.6 8" />
        <polygon points="53.4 0 45.8 0 38.2 0 30.6 0 23 0 23 8 30.6 8 38.2 8 45.8 8 53.4 8 61 8 61 0" />
      </g>
    </svg>
  </Span>
);
export default trophy;
