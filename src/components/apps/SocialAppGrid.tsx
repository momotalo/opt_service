import React from 'react';
import SocialAppCard from './SocialAppCard';
import { SocialApp } from 'types/index';

interface SocialAppGridProps {
    apps: SocialApp[];
    onAppClick?: (app: SocialApp) => void;
    gridCols?: {
        base?: number;
        lg?: number;
        xl?: number;
    };
    gap?: number;
    cardSize?: 'sm' | 'md' | 'lg';
    className?: string;
}

const SocialAppGrid: React.FC<SocialAppGridProps> = ({
    apps,
    onAppClick,
    cardSize = 'md',
    className = ""
}) => {

    const handleAppClick = (app: SocialApp) => {
        if (onAppClick) {
            onAppClick(app);
        } else {
            console.log(`Selected social app: ${app.name}`);
            // Default action
        }
    };

    return (
        <div className={`items ${className}`}>
            {/* Grid layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {apps.map((app) => (
                    <SocialAppCard
                        key={app.id}
                        app={app}
                        onClick={handleAppClick}
                        cardSize={cardSize}
                    />
                ))}
            </div>
        </div>
    );
};

export default SocialAppGrid;