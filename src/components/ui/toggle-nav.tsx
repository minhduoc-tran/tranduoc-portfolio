'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { AlignJustify, X } from 'lucide-react'

import { navList } from '@/constants/nav-item'
import { cn } from '@/lib/utils'

import { socialMediaList } from '../common/social-media'
import { Button } from './button'
import { ModeToggle } from './mode-toggle'

const ToggleNav = () => {
  const pathName = usePathname()
  const [isToggle, setIsToggle] = React.useState(false)

  const handleToggleClick = () => {
    setIsToggle(!isToggle)
  }

  return (
    <div className="block md:hidden">
      <Button
        className={cn(
          'flex items-center justify-center rounded-full md:block',
          {
            'bg-[#0077b6] text-white': isToggle,
            'bg-white text-black': !isToggle,
          }
        )}
        variant="outline"
        size="icon"
        onClick={handleToggleClick}
      >
        {isToggle ? <X /> : <AlignJustify />}
      </Button>
      <div
        className={cn('absolute left-0 top-[60px] z-50 w-full bg-white', {
          hidden: !isToggle,
        })}
      >
        <ul className="p-4">
          {navList.map((nav) => (
            <li key={nav.path} className="flex w-full flex-1 py-4">
              <Link
                href={nav.path}
                className={cn(
                  'text-lg font-semibold',
                  pathName === nav.path
                    ? 'text-[#0077b6]'
                    : 'text-black dark:text-white'
                )}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-center justify-between border-t-2 px-2 py-4">
          <SocialList />
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

const SocialList = () => {
  return (
    <div className="flex items-center gap-x-2">
      {socialMediaList.map((info, index) => {
        return (
          <Link
            className="hover:text-[#0077b6]"
            key={index}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              {info.icon}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}

export default ToggleNav
