"use client"

import WorldAndCard from './world-and-card'
import { LoadingProvider } from '@/context/world-context'

export default function WholeWorld() {
    return (
      <LoadingProvider>
        <WorldAndCard />
      </LoadingProvider>
    )
  }

