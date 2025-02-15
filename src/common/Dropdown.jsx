import { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                type="button"
                role="combobox"
                aria-expanded={isOpen}
                onClick={toggleDropdown}
                className="
                    flex h-9 items-center justify-between whitespace-nowrap 
                    border px-3 py-2 text-sm shadow-sm ring-offset-background 
                    placeholder:text-muted-foreground focus:outline-none focus:ring-1 
                    focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 
                    [&>span]:line-clamp-1 border-[#272626] 
                    w-40 rounded-lg bg-secondary mb-4 md:mb-0
                "
            >
                <span style={{ pointerEvents: "none" }}>{selected}</span>
                <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-4 opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                >
                    <path
                        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute mt-2 w-40 bg-black border border-zinc-800 rounded-lg shadow-lg">
                    <ul className="py-1 text-sm text-gray-200">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 bg-black cursor-pointer hover:bg-gray-800"
                                onClick={() => {
                                    setSelected(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
