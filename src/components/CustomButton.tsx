import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    target?: '_blank' | '_self' | '_parent' | '_top';
    external?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'lg',
    className = '',
    disabled = false,
    type = 'button',
    target = '_self',
    external = false
}) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

    // Variant styles
    const variantStyles = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white border-4 border-blue-600 hover:border-blue-700 focus:ring-blue-300',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white border-4 border-gray-600 hover:border-gray-700 focus:ring-gray-300',
        outline: 'border-4 border-white text-white hover:bg-black hover:border-black focus:ring-white/50 bg-transparent',
        ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-4 border-transparent focus:ring-gray-300'
    };

    // Size styles
    const sizeStyles = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
        xl: 'py-5 px-10 text-xl'
    };

    // Combine all styles
    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    // If href is provided, render as Link or anchor
    if (href) {
        // External link หรือ special protocols
        if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
            return (
                <a
                    href={href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className={buttonClasses}
                    onClick={onClick}
                >
                    {children}
                </a>
            );
        }

        // Internal Next.js Link
        return (
            <Link
                href={href}
                className={buttonClasses}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    // Regular button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
        >
            {children}
        </button>
    );
};

export default CustomButton;