"use client"

import React, { useState, useEffect } from 'react'
import { badgeVariants } from './badge'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "./hover-card"
import Link from 'next/link'



interface BadgeProps {
    companyName: string;
    companyImage: string;
    companyURL: string;
    companyTeam: string;
    companyWorkDescription: string;
}

export default function CompanyBadge(props: BadgeProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
      }, [])

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
            {isClient ? <Link className={badgeVariants()}  replace={false} rel="noopener noreferrer" target="_blank" href={props.companyURL}>
            <Avatar className='w-4 h-auto'>
                <AvatarImage src={props.companyImage} alt="" className='rounded-full'/>
            </Avatar> {props.companyName}
            </Link> : null}
            </HoverCardTrigger>
            <HoverCardContent className='text-gray-400'>
                <div className='text-white text-xl'>
                    {props.companyTeam}
                </div>
                {props.companyWorkDescription}
            </HoverCardContent>
        </HoverCard>
    )
}
