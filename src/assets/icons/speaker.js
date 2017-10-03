import React from "react";
import { Span } from "components/UI";

const speaker = ({ size, color }) => (
  <Span css={{ color }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
    >
      <g fill="currentColor" fillRule="evenodd" transform="translate(16 12)">
        <polygon points="8 32 8 24 0 24 0 32 0 40 0 48 8 48 8 40" />
        <polygon points="0 24 0 32 0 40 0 48 8 48 8 40 8 32 8 24" />
        <polygon points="8 56 16 56 16 48 8 48" />
        <polygon points="8 56 16 56 16 48 8 48" />
        <polygon points="48 40 48 32 48 24 40 24 40 32 40 40 40 48 48 48" />
        <polygon points="40 24 40 32 40 40 40 48 48 48 48 40 48 32 48 24" />
        <polygon points="56 16 56 24 56 32 56 40 56 48 56 56 64 56 64 48 64 40 64 32 64 24 64 16" />
        <polygon points="56 16 56 24 56 32 56 40 56 48 56 56 64 56 64 48 64 40 64 32 64 24 64 16" />
        <polygon points="48 64 56 64 56 56 48 56" />
        <polygon points="48 64 56 64 56 56 48 56" />
        <polygon points="48 16 56 16 56 8 48 8" />
        <polygon points="48 16 56 16 56 8 48 8" />
        <polygon points="24 8 16 8 16 16 24 16 24 24 24 32 24 40 24 48 24 56 16 56 16 64 24 64 24 72 32 72 32 64 32 56 32 48 32 40 32 32 32 24 32 16 32 8 32 0 24 0" />
        <polygon points="24 0 24 8 16 8 16 16 24 16 24 24 24 32 24 40 24 48 24 56 16 56 16 64 24 64 24 72 32 72 32 64 32 56 32 48 32 40 32 32 32 24 32 16 32 8 32 0" />
        <polygon points="8 24 16 24 16 16 8 16" />
        <polygon points="8 24 16 24 16 16 8 16" />
      </g>
    </svg>
  </Span>
);
export default speaker;
