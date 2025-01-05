'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { gotAJobStory } from '@/constants/got-a-job-story'

const GotAJobList = () => {
  return (
    <div className="mt-6 grid min-h-[320px] w-full grid-cols-1 gap-4 px-2 md:max-w-3xl md:grid-cols-2 md:px-4">
      {gotAJobStory.map((item, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-xl md:h-full md:border-4 md:border-black"
          >
            <Image
              src={item.path}
              fill
              alt="got a job"
              className="rounded-xl border-8 border-white bg-cover bg-center object-cover dark:border-transparent"
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default GotAJobList
