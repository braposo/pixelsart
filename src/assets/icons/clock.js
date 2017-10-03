import React from "react";
import { Span } from "components/UI";

const clock = ({ size, color }) => (
  <Span css={{ color }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
    >
      <g fill="currentColor" fillRule="evenodd" transform="translate(20 20)">
        <polygon points="40 16 48 16 48 8 40 8" />
        <polygon points="39.999 16 47.999 16 47.999 8 39.999 8" />
        <polygon points="48 16 48 24 48 32 48 40 56 40 56 32 56 24 56 16" />
        <polygon points="48 16 48 24 48 32 48 40 56 40 56 32 56 24 56 16" />
        <polygon points="40 48 48 48 48 40 40 40" />
        <polygon points="39.999 48 47.999 48 47.999 40 39.999 40" />
        <polygon points="8 24 8 16 0 16 0 24 0 32 0 40 8 40 8 32" />
        <polygon points="0 16 0 24 0 32 0 40 8 40 8 32 8 24 8 16" />
        <polygon points="8 48 16 48 16 40 8 40" />
        <polygon points="7.999 48 15.999 48 15.999 40 7.999 40" />
        <polygon points="32 8 40 8 40 0 32 0 24 0 16 0 16 8 24 8" />
        <polygon points="32 0 24 0 16 0 16 8 24 8 32 8 40 8 40 0" />
        <polygon points="32 16 24 16 24 24 24 32 32 32 40 32 40 24 32 24" />
        <polygon points="24 16 24 24 24 32 32 32 40 32 40 24 32 24 32 16" />
        <polygon points="24 48 16 48 16 56 24 56 32 56 40 56 40 48 32 48" />
        <polygon points="32 48 24 48 16 48 16 56 24 56 32 56 40 56 40 48" />
        <polygon points="8 16 16 16 16 8 8 8" />
        <polygon points="7.999 16 15.999 16 15.999 8 7.999 8" />
      </g>
    </svg>
  </Span>
);
export default clock;
