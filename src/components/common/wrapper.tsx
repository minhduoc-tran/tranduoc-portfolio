'use client'

import React from 'react'

import { type ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

interface WrapperProps {
  children: React.ReactNode
  style?: ClassValue | undefined
}

const Wrapper = ({ children, style }: WrapperProps) => {
  return (
    <section className={cn('w-100 mx-auto max-w-screen-xl', style)}>
      {children}
    </section>
  )
}

export default Wrapper
