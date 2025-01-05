'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { navList } from '@/constants/nav-item'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav className="hidden items-center justify-center gap-4 rounded-full border-2 p-2 md:flex">
      {navList.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={cn(
              'rounded-full px-4 py-1 text-base font-semibold text-black dark:text-white',
              {
                'bg-[#0077b6] text-white': pathName === item.path,
              }
            )}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
