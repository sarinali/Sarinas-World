import React from 'react'
import { socials } from '@/constants/socials'
import SocialIcon from './ui/social_icon'


export default function FindMeAt() {
  return (
    <div className='flex mt-12  space-x-3'>
      {socials.map((item, index) => {
        return (
          <SocialIcon
          {...item}
          key={index}
          />
        )
      })}
    </div>
  )
}
