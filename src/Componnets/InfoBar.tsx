import React from "react";
export type InfoBarProps = {
  status: "SUCCESS" | "ERROR";
  message: string;
};
const InfoBar = ({ status, message }: InfoBarProps) => {
  // Determine the background color of the bar based on success and error props
  const bgColor = status === "SUCCESS" ? "bg-green-500" : "bg-red-500";
  return (
    <div
      className={`w-30 rounded p-2 text-sm h-8 ${bgColor} z-50 flex justify-center items-center text-white `}
    >
      {message}
    </div>
  );
};

export default InfoBar;
