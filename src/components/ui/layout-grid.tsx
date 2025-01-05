'use client'

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

type Card = {
  id: number

  className: string
  thumbnail: string
}

const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-2 p-10 md:grid-cols-3 md:gap-4">
      {cards.map((card) => {
        return (
          <motion.div
            key={card.id}
            initial={{
              opacity: 0,
              y: Math.floor(Math.random() * 61) - 20,
              x: Math.floor(Math.random() * 220) - 20,
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
            className={cn(
              'relative h-[250px] w-full overflow-hidden md:h-full',
              card.className
            )}
          >
            <CardImage thumbnail={card.thumbnail} />
          </motion.div>
        )
      })}
    </div>
  )
}

const CardImage = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <Image
      src={thumbnail}
      alt="Tran Duoc"
      height="500"
      width="500"
      loading="lazy"
      className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-cover bg-center object-cover transition duration-200 hover:border-4 hover:border-black"
    />
  )
}

export default LayoutGrid
