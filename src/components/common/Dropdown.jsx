import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({
    options = [],
    placeholder = "Select",
    onSelect,
    value = null,              // controlled value
    defaultValue,       // initial value
    variant = "primary",
    size = "md",
    prefix = ""
}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue || null);
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
        onSelect && onSelect(option);
    };

    const selectedValue = value || selected;

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        dark: "bg-zinc-800 text-white hover:bg-zinc-700",
        outline: "border border-zinc-600 text-zinc-300 hover:bg-zinc-800",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <div className="relative w-40" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className={`w-full rounded-xl flex justify-between items-center transition ${variants[variant]} ${sizes[size]}`}
            >
                <span>
                    {selectedValue
                        ? `${prefix ? prefix + " " : ""}${selectedValue.label}`
                        : placeholder}
                </span>
                <span className={`transition ${open ? "rotate-180" : ""}`}>▼</span>
            </button>

            {open && (
                <div className="absolute mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg z-50 overflow-hidden">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="px-3 py-2 text-sm cursor-pointer hover:bg-zinc-800"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;