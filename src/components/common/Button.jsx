import React from "react";

const Button = ({
  children,
  variant = "primary",   // primary, secondary, outline, danger, ghost
  size = "md",           // sm, md, lg
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
}) => {

  const baseStyle =
    "inline-flex items-center cursor-pointer justify-center gap-2 font-medium rounded-xl transition-all duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {loading && <span className="animate-spin">⏳</span>}
      {!loading && leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
};

export default Button;