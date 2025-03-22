"use client"

import React from 'react'
import Spline from '@splinetool/react-spline'
import { useLoadingContext } from '@/context/world-context'

export default function World() {
    const {setWorldLoading} = useLoadingContext()
    return (
        <div className="w-[110vw] h-[110vh] absolute top-0 left-0 overflow-hidden flex justify-center items-center">
            <Spline 
            scene="https://prod.spline.design/vYCVhCue8jjJ2Z-o/scene.splinecode"
            onLoad={() => {
                setWorldLoading(false);
            }}
            />
        </div>
    )
}
