import React from "react";
import { Span } from "../UI";

const heart = ({ size, color }) => (
  <Span css={{ color }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
    >
      <g fill="currentColor" fillRule="evenodd" transform="translate(12 16)">
        <polygon points="24 56 32 56 32 48 24 48" />
        <polygon points="24 56 32 56 32 48 24 48" />
        <polygon points="16 48 24 48 24 40 16 40" />
        <polygon points="16 48 24 48 24 40 16 40" />
        <polygon points="8 40 16 40 16 32 8 32" />
        <polygon points="8 40 16 40 16 32 8 32" />
        <polygon points="8 16 0 16 0 24 0 32 8 32 8 24" />
        <polygon points="0 16 0 24 0 32 8 32 8 24 8 16" />
        <polygon points="8 16 16 16 16 8 8 8" />
        <polygon points="8 16 16 16 16 8 8 8" />
        <polygon points="16 8 24 8 24 0 16 0" />
        <polygon points="16 8 24 8 24 0 16 0" />
        <polygon points="24 16 32 16 32 8 24 8" />
        <polygon points="24 16 32 16 32 8 24 8" />
        <polygon points="32 24 40 24 40 16 32 16" />
        <polygon points="32 24 40 24 40 16 32 16" />
        <polygon points="40 16 48 16 48 8 40 8" />
        <polygon points="40 16 48 16 48 8 40 8" />
        <polygon points="48 8 56 8 56 0 48 0" />
        <polygon points="48 8 56 8 56 0 48 0" />
        <polygon points="56 16 64 16 64 8 56 8" />
        <polygon points="56 16 64 16 64 8 56 8" />
        <polygon points="64 16 64 24 64 32 72 32 72 24 72 16" />
        <polygon points="64 16 64 24 64 32 72 32 72 24 72 16" />
        <polygon points="56 40 64 40 64 32 56 32" />
        <polygon points="56 40 64 40 64 32 56 32" />
        <polygon points="48 48 56 48 56 40 48 40" />
        <polygon points="48 48 56 48 56 40 48 40" />
        <polygon points="40 56 48 56 48 48 40 48" />
        <polygon points="40 56 48 56 48 48 40 48" />
        <polygon points="32 64 40 64 40 56 32 56" />
        <polygon points="32 64 40 64 40 56 32 56" />
      </g>
    </svg>
  </Span>
);
export default heart;
