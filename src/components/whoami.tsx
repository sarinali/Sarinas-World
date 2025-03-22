import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { companiies } from '@/constants/companies'
import CompanyBadge from './ui/company_badge'

export default function WhoAmI() {
  return (
    <div>
        <div className='mt-2'>
        <p className='text-white'>Engineer & builder, moonlighting as a student. 👩‍💻</p>
        <div className='mt-2'></div>
        <div className='text-gray-400 mt-8'>
        <HoverCard>
        <HoverCardTrigger className="relative cursor-pointer transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full">
          Software Engineer @
        </HoverCardTrigger>

          <HoverCardContent className='text-gray-400'>
      Stealing snacks @ is what I meant to say...
          </HoverCardContent>
        </HoverCard>
          <div className='flex-1 space-x-1 mt-2'>
           {companiies.map((item, index) => {
            return (
              <CompanyBadge 
                {...item}
                key={index}
              />
            )
           })}
          </div>
        </div>
        </div>
    </div>
  )
}
