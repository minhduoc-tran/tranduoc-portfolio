import dynamic from 'next/dynamic'
import React from 'react'

import Education from '@/components/sections/about-section/education'

const MemorableMilestone = dynamic(
  () => import('@/components/sections/about-section/memorable-milestone')
)

const AboutPage = () => {
  return (
    <div>
      <Education />
      <MemorableMilestone />
    </div>
  )
}

export default AboutPage
