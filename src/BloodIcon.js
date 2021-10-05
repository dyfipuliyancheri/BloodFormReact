import React from "react";

function BloodIcon({ blood }) {
  return (
    <svg
      className="blood"
      viewBox="0 0 210 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M104.75 0C104.75 0 0 117.481 0 186C0 243.852 46.898 290.75 104.75 290.75C162.602 290.75 209.5 243.852 209.5 186C209.5 117.481 104.75 0 104.75 0ZM125.676 254.189C153.579 242.514 173.481 212.07 173.481 176.339C173.481 149.657 155.815 113.612 137.864 83.856C155.837 109.972 183.413 154.986 183.413 185.372C183.412 222.3 157.814 252.441 125.676 254.189Z"
        fill="#AB1A1A"
      />
      <text
        x="50%"
        y="70%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={90}
        fontWeight={600}
        fill="white"
      >
        {blood}
      </text>
    </svg>
  );
}

export default BloodIcon;
