import { Button } from "@heroui/react";

interface ButtonProps {
    text: string;
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    size?: 'sm' | 'md' | 'lg';
    color?: "primary" | "secondary" | "danger" | "success" | "default" | "warning";
    variant?: "solid" | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    className?: string;
}

export default function App({
    text,
    radius,
    size,
    color,
    variant,
    className = '',
}: ButtonProps) {
    return <Button radius={radius} size={size} color={color} variant={variant} className={className} >{text}</Button>;
}
