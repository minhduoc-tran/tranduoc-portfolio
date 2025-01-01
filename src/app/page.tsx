import dynamic from 'next/dynamic'

import Header from '@/components/common/header'
import HeroSection from '@/components/sections/main-section/hero'

const SkillsSection = dynamic(
  () => import('@/components/sections/main-section/skills')
)

const WorkExperience = dynamic(
  () => import('@/components/sections/main-section/work-experience')
)

const MoreInfo = dynamic(
  () => import('@/components/sections/main-section/more-info')
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SkillsSection />
      <WorkExperience />
      <MoreInfo />
    </div>
  )
}
