// components/common/Pill.tsx
import React from "react";
import clsx from "clsx";

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
        {
          // inactive styles
          "bg-gray-100 text-gray-700 hover:bg-gray-200": !isActive,
          // active styles
          "bg-[#34967C] text-white hover:bg-[#2f8166]": isActive,
        }
      )}
    >
      {label}
    </button>
  );
};

export default Pill;
