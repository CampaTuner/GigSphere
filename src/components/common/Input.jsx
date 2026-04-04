import React from "react";

const Input = ({
    type = "text",
    placeholder = "",
    value,
    onChange,
    icon = null,
    fullWidth = false,
}) => {
    return (
        <div className={`relative ${fullWidth ? "w-full" : "w-80"}`}>
            {/* Icon */}
            {icon && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                    {icon}
                </span>
            )}

            {/* Input */}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`
          bg-zinc-800 border border-zinc-700 
          focus:border-blue-500 rounded-xl 
          px-4 py-3 ${icon ? "pl-10" : ""} 
          text-sm focus:outline-none transition
          ${fullWidth ? "w-full" : "w-full"}
        `}
            />
        </div>
    );
};

export default Input;