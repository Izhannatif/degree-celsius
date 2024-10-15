import React from 'react';

const CustomButton = ({ text, color, fontColor, height = 63, width = 185 }) => {
  // Calculate the position for the right element dynamically based on the width
  const rightElementX = width - 23; // Adjust this based on your original layout

  return (
    <div className="relative">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Button Background */}
        <rect x="0.5" width={width - 1} height={height} rx="8" fill={color} />

        {/* Left element */}
        <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="3" y="1" width="20" height="61">
          <g clipPath="url(#clip0)">
            <path d="M12.4136 27.7329V57.0454H13.5861V27.7329H12.4136Z" fill="black" />
            <path d="M17.1035 16.0079H8.896V24.2154H17.1035V16.0079Z" fill="black" />
            <path d="M17.1035 13.6629H8.896V5.45544H17.1035V13.6629ZM10.0685 12.4904H15.931V6.62794H10.0685V12.4904Z" fill="black" />
          </g>
        </mask>
        <g mask="url(#mask0)">
          <rect x="3" y="1" width="20" height="60.97" fill={fontColor} />
        </g>

        {/* Right element - moved dynamically */}
        <mask id="mask1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x={rightElementX} y="1" width="20" height="61">
          <g clipPath="url(#clip1)">
            <path d="M173.414 35.2371V5.92456H174.586V35.2371H173.414Z" fill="black" />
            <path d="M178.103 46.962H169.896V38.7545H178.103V46.962Z" fill="black" />
            <path d="M178.103 49.307H169.896V57.5145H178.103V49.307ZM171.068 50.4795H176.931V56.342H171.068V50.4795Z" fill="black" />
          </g>
        </mask>
        <g mask="url(#mask1)">
          <rect x={rightElementX} y="1" width="20" height="60.97" fill={fontColor} />
        </g>

        <defs>
          <clipPath id="clip0">
            <rect width="20" height="60.97" fill="white" transform="translate(3 1)" />
          </clipPath>
          <clipPath id="clip1">
            <rect width="20" height="60.97" fill="white" transform={`translate(${rightElementX} 1)`} />
          </clipPath>
        </defs>
      </svg>
      {/* Button Text */}
      <p
        className="absolute inset-0 flex items-center justify-center text-lg font-regular"
        style={{ color: fontColor }}
      >
        {text}
      </p>
    </div>
  );
};

export default CustomButton;
