import React from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "./hover-card"
import Link from "next/link";

interface IconProps {
    icon: React.ElementType;
    linkInfo: string;
    linkURL: string;
}

export default function SocialIcon(props: IconProps) {
  return (
    <HoverCard>
        <HoverCardTrigger asChild>
        <Link replace={false} rel="noopener noreferrer" target="_blank" href={props.linkURL}>
            <div className="text-gray-300 hover:text-gray-700 transition ease-in-out">
                {React.createElement(props.icon, { width: "25", height: "25" })}
            </div>
        </Link> 
        </HoverCardTrigger>
        <HoverCardContent className='text-gray-400'>
            {props.linkInfo}
        </HoverCardContent>
    </HoverCard>
  )
}
