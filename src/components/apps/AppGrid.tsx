import React from 'react';
import AppCard from './AppCard';
import { AppItem } from 'types/index';

interface AppGridProps {
    apps: AppItem[];
    onAppClick?: (app: AppItem) => void;
    statusText?: string;
    className?: string;
}

const AppGrid: React.FC<AppGridProps> = ({
    apps,
    onAppClick,
    statusText = "รับ OTP",
    className = ""
}) => {

    const handleAppClick = (app: AppItem) => {
        if (onAppClick) {
            onAppClick(app);
        } else {
            console.log(`Selected app: ${app.name}`);
            // Default action - you can customize this
        }
    };

    return (
        <div className={`items ${className}`}>
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4`}>
                {apps.map((app) => (
                    <AppCard
                        key={app.id}
                        app={app}
                        onClick={handleAppClick}
                        statusText={statusText}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppGrid;