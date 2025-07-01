import React from 'react'
import { useLoadingContext } from '@/context/world-context';

export default function ProjectWrapper({ children }: { children: React.ReactNode }) {
    const { ready } = useLoadingContext();
    if (ready) { 
        return (
            <div>
                {children}
            </div>
        );
    }
    return null;
}
