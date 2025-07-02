import React from "react";

const GurdwaraEntranceArc = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <svg
        viewBox="0 0 1000 300"
        width="100%"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Entrance Arch Curve */}
        <path
          d="
            M 0 300
            Q 250 50, 500 100
            Q 750 50, 1000 300
          "
          fill="none"
          stroke="black"
          strokeWidth="4"
        />

        {/* Optional pointed center peak */}
        <path
          d="
            M 485 100
            L 500 30
            L 515 100
          "
          fill="none"
          stroke="black"
          strokeWidth="3"
        />

        {/* Optional circle with symbol */}
        <circle cx="500" cy="30" r="18" stroke="black" strokeWidth="2" fill="none" />
        <text x="490" y="36" fontSize="18" fontFamily="serif">ੴ</text>
      </svg>
    </div>
  );
};

export default GurdwaraEntranceArc;
