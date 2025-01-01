'use client'

import React from 'react'

import { cn } from '@/lib/utils'

interface WrapperProps {
  children: React.ReactNode
  style?: string | undefined
}

const Wrapper = ({ children, style }: WrapperProps) => {
  return (
    <section className={cn('w-100 mx-auto max-w-screen-xl', style)}>
      {children}
    </section>
  )
}

export default Wrapper
