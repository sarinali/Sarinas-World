import React from 'react'
import { GlassButton as Button } from './ui/moving-border'
import { useLoadingContext } from '@/context/world-context'

export default function Loading() {
    const {worldLoading, setReady} = useLoadingContext()
    return (
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
        <Button
            moving={false}
            borderClassName='none'
            borderRadius="1.5rem"
            className='bg-blur-sm border-white/20'
            containerClassName="w-[400px] cursor-pointer transition ease-in-out duration-200 hover:bg-white/10"
            onClick={() => {
                setReady(true);
            }}
        >
            {worldLoading ? "Loading into Sarina's World... 🚀" : "LET'S GOOO!"}
        </Button>
        </div>
    )
}
