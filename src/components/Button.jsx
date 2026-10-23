// src/components/Button.jsx

import React from "react";

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2.5 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm w-full ${className}`}
    >
      {children}
    </button>
  );
}
