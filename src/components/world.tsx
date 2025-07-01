"use client"

import React from 'react'
import Waves from './Waves/Waves'

export default function World() {
    return (
        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 overflow-hidden flex justify-center items-center">
            <Waves
            lineColor="#fff"
            backgroundColor="rgba(0,0,0)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={20}
            waveAmpY={20}
            friction={0.9}
            tension={0.03}
            maxCursorMove={30}
            xGap={15}
            yGap={36}
            />
        </div>
    )
}
