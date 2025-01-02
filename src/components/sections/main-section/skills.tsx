'use client'

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

import Wrapper from '@/components/common/wrapper'
import { techList } from '@/constants/tech-list'

const SkillsSection = () => {
  return (
    <Wrapper style="min-h-[70vh]  border-8 border-slate-500 border-double rounded-[255px_15px_225px_15px/15px_225px_15px]  p-2 md:p-4 lg:p-8">
      <h2 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
        Skills
      </h2>
      <ul className="w-100 mt-6 grid grid-cols-3 items-center gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-8 lg:gap-6">
        {techList.map((item, index) => {
          return (
            <motion.li
              initial={{ scale: 0, opacity: 0, x: -10, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.2, delay: 0.01 * index }}
              key={index}
              className="flex flex-col items-center justify-center p-[10px]"
            >
              <Image src={item.path} alt={item.name} width={60} height={60} />
              <span className="mt-2 text-sm font-semibold">{item.name}</span>
            </motion.li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default SkillsSection
