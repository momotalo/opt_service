import React from 'react';

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = "ค้นหาแอพพลิเคชัน...",
    value,
    onChange,
    className = ""
}) => {
    return (
        <div className={`relative w-full ${className}`}>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchInput;