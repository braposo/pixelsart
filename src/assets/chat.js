import React from "react";
import { Span } from "../UI";

const chat = ({ size, color }) => (
  <Span css={{ color }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
    >
      <g fill="currentColor" fillRule="evenodd" transform="translate(17 17)">
        <polygon points="0 39 8 39 8 8 0 8" />
        <polygon points="0 39 8 39 8 8 0 8" />
        <polygon points="54 8 54 38.857 54 46.571 46 46.571 46 54.286 54 54.286 54 62 62 62 62 38.857 62 8" />
        <polygon points="54 8 54 38.857 54 46.571 46 46.571 46 54.286 54 54.286 54 62 62 62 62 38.857 62 8" />
        <polygon points="8 8 55 8 55 0 8 0" />
        <polygon points="8 8 55 8 55 0 8 0" />
        <polygon points="8 47 47 47 47 39 8 39" />
        <polygon points="8 47 47 47 47 39 8 39" />
        <polygon points="15 24 31 24 31 16 15 16" />
        <polygon points="15 24 31 24 31 16 15 16" />
        <polygon points="39 24 47 24 47 16 39 16" />
        <polygon points="39 24 47 24 47 16 39 16" />
      </g>
    </svg>
  </Span>
);
export default chat;
