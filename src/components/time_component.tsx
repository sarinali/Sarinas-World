"use client"

import { useEffect, useState } from 'react';

export default function TimeDisplay() {
    const [currentTime, setCurrentTime] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!isMounted) return null;

    return (
        <p className="text-gray-400 text-md pointer-events-none">{currentTime}</p>
    )
}