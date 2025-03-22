import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
    return (
        <div className="w-full max-w-md mx-12 sm:mx-0
                md:absolute md:top-1/2 md:left-1/2 md:transform 
                md:-translate-x-1/2 md:-translate-y-1/2
                p-8 rounded-lg shadow-lg 
                bg-gray-900/50 backdrop-blur-lg border border-white/20">
        {children}
        </div>
    );
};

export default GlassCard;