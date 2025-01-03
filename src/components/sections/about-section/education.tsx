'use client'

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

import Wrapper from '@/components/common/wrapper'

const desc = [
  'I graduated with a major in Computer Science from Can Tho University.',
  'Currently, I am working as a Web developer for a company in Ho Chi Minh City.',
  'I have a passion for building websites, I have experience working with React for FrontEnd, .Net for Backend.',
  'I am always looking to learn new technologies and improve my skills.',
]

const Education = () => {
  return (
    <Wrapper style="flex items-center justify-center min-h-screen px-2 md:px-4">
      <div className="w-full">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl lg:text-5xl">
          About Me
        </h2>

        <div className="mt-8 flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="relative h-[400px] w-full overflow-hidden rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-black"
          >
            <Image
              className="bg-cover bg-center object-cover"
              src={'/images/DHF_1752.jpg'}
              alt="Tran Duoc"
              fill
            />
          </motion.div>
          <div className="relative w-full text-base font-medium">
            {desc.map((item, index) => {
              return (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * index }}
                  key={index}
                  className="mb-2 flex items-start gap-2"
                >
                  {item}
                </motion.p>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Education
