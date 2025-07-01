"use client"


import GlassCard from './glass_card'
import TimeDisplay from './time_component'
import WhoAmI from './whoami'
import FindMeAt from './find_me_at'
import World from './world'

import React from 'react'

export default function WorldAndCard() {
    return (
        <div className="w-screen h-screen m-0 p-0 overflow-hidden relative">
            <World/>
                <div className="flex items-center justify-center h-full">
                    <GlassCard>
                    <div className='text-gray-500 -mt-6 -ml-6 mb-2 pointer-events-none'>李晶</div>
                    <hr className="-mx-8 mb-4 border-t border-gray-500" />
                    <div className='w-full flex flex-col relative'>
                        <h1 className="text-white text-4xl font-semibold pointer-events-none">{"Sarina's World 🌎"}</h1>
                        <TimeDisplay/>
                        <WhoAmI/>
                        <FindMeAt/>
                    </div>
                    <hr className="-mx-8 my-4 border-t border-gray-500" />
                    <div className='-mt-2 -mb-6 -ml-6 text-gray-500 pointer-events-none'>March 2025</div>
                    </GlassCard>
                </div>
        </div>
    )
}
