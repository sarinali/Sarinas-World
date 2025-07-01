"use client"

import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BuildCardProps } from '@/types'
import Image from 'next/image'

export default function BuildCard(props: BuildCardProps) {
  return (
    <div className="relative w-full group transition duration-300 ease-in-out hover:scale-[1.01]">
  <div className="absolute -inset-2 rounded-[24px] z-0 opacity-0 group-hover:opacity-100 transition duration-300 glow-shadow pointer-events-none" />

  <Card 
  onClick={() => window.open(props.link, '_blank')}
  className="relative z-10 w-full border border-neutral-800 rounded-xl cursor-pointer">
    <CardHeader>
      <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image
          className="p-2 border border-neutral-800 rounded-xl"
            src={props.imageUrl}
            alt={props.title}
            width={100}
            height={100}

          />
        <div className="flex flex-col justify-between">
          <CardTitle className="text-xl">{props.title}</CardTitle>
          <CardDescription className="mt-1 mb-2">
            {props.description}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  </Card>
</div>

  )
}
