import dynamic from 'next/dynamic'
import React from 'react'

import { ArrowBigDown } from 'lucide-react'

import Wrapper from '@/components/common/wrapper'
import { memorableMilestones } from '@/constants/memorable-milestones'

const LayoutGrid = dynamic(() => import('@/components/ui/layout-grid'))
const GotAJobList = dynamic(() => import('@/components/ui/got-a-job-list'))

const GraduateOnTime = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <ArrowBigDown className="h-32 w-32 text-[#0077b6]" />
      <div className="flex w-full flex-col items-center rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-black dark:border-white">
        <h3 className="py-2 text-2xl font-semibold">Graduate on time</h3>
        <span className="max-w-[750px] text-center text-base font-medium">
          My efforts were finally successful, I had memorable memories with my
          friends. A chapter in my life has closed, a beautiful memory for my
          personal development
        </span>

        <LayoutGrid cards={memorableMilestones} />
      </div>
    </div>
  )
}

const GotAJob = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ArrowBigDown className="h-32 w-32 text-[#0077b6]" />
      <div className="flex w-full flex-col items-center rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-black py-4 dark:border-white">
        <h3 className="py-2 text-2xl font-semibold">Got a job</h3>
        <span className="max-w-[750px] text-center text-base font-medium">
          Luckily, I was able to get a job in my major after graduating
        </span>
        <GotAJobList />
      </div>
    </div>
  )
}

const ComingSoon = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ArrowBigDown className="h-32 w-32 text-[#0077b6]" />
      <div className="flex w-full flex-col items-center rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-black py-4">
        <h3 className="py-2 text-2xl font-semibold">Coming Soon</h3>
        <span className="max-w-[750px] text-center text-base font-medium">
          Following my career path, I will continue to strive for success
        </span>
      </div>
    </div>
  )
}

const MemorableMilestone = () => {
  return (
    <Wrapper style="flex flex-col items-center justify-center min-h-screen px-2 md:px-4 py-4">
      <h2 className="text-center text-3xl font-extrabold md:text-4xl lg:text-5xl">
        Memorable Milestone
      </h2>
      <div className="mt-6 w-full">
        <GraduateOnTime />
        <GotAJob />
        <ComingSoon />
      </div>
    </Wrapper>
  )
}

export default MemorableMilestone
