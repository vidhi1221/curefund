import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

const FilterDropdown = ({ value, options, onChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="filter-dropdown" ref={ref}>
        <button className="filter-btn" onClick={() => setOpen(!open)}>
            {value}
            <FaChevronDown />
        </button>

        {open && (
            <div className="filter-menu">
            {options.map(opt => (
                <div
                key={opt}
                className="filter-item"
                onClick={() => {
                    onChange(opt);
                    setOpen(false);
                }}
                >
                {opt}
                {opt === value && <FaCheck />}
                </div>
            ))}
            </div>
        )}
        </div>
    );
};

export default FilterDropdown;
