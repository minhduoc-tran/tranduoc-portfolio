'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from 'lucide-react'

import { moreInfo } from '@/constants/more-info'

const CardHoverEffect = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3">
      {moreInfo.map((item, idx) => {
        return (
          <div
            key={idx}
            className="group relative block w-full p-4"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-[255px_15px_225px_15px/15px_225px_15px] bg-[#0077b6]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.09 * idx }}
              className="relative z-20 flex h-full max-h-[20vh] w-full flex-col gap-2 rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-black bg-white p-4"
            >
              <Link
                href={item.link}
                className="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full border-2 border-black p-1 hover:bg-slate-200"
                target="_blank"
              >
                <Navigation width={15} height={15} />
              </Link>

              <h3 className="text-lg font-bold md:text-lg">{item.title}</h3>
              <span className="text-sm">{item.description}</span>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default CardHoverEffect
