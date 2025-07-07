import React from 'react';
import PhoneCard from './PhoneCard';

interface PhoneGridProps {
    phoneNumbers: string[];
    className?: string;
    onPhoneClick?: (phoneNumber: string) => void;
}

const PhoneGrid: React.FC<PhoneGridProps> = ({
    phoneNumbers,
    className = "",
    onPhoneClick
}) => {

    const handlePhoneClick = (phoneNumber: string) => {
        if (onPhoneClick) {
            onPhoneClick(phoneNumber);
        } else {
            navigator.clipboard.writeText(phoneNumber);
            // Optional: Show toast notification
            console.log(`Copied ${phoneNumber} to clipboard`);
        }
    };

    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
            {phoneNumbers.map((phoneNumber, index) => (
                <PhoneCard
                    key={`phone-${index}`}
                    phoneNumber={phoneNumber}
                    onClick={() => handlePhoneClick(phoneNumber)}
                    className="shadow-[0_0_4px_#29527D] hover:shadow-[0_0_16px_#29527D]"
                />
            ))}
        </div>
    );
};

export default PhoneGrid;