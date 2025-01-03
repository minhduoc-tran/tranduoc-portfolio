import React from 'react'

import { ArrowBigDown } from 'lucide-react'

import Wrapper from '@/components/common/wrapper'

const GraduateOnTime = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ArrowBigDown className="h-32 w-32" />
      <div className="flex w-full flex-col items-center rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-black">
        <h3 className="py-2 text-2xl font-semibold">Graduate on time</h3>
        <span className="max-w-[750px] text-center text-base font-medium">
          My efforts were finally successful, I had memorable memories with my
          friends. A chapter in my life has closed, a beautiful memory for my
          personal development
        </span>
      </div>
    </div>
  )
}

const GotAJob = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ArrowBigDown className="h-32 w-32" />
      <div className="flex w-full flex-col items-center rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-black">
        <h3 className="py-2 text-2xl font-semibold">Got a job</h3>
        <span className="max-w-[750px] text-center text-base font-medium">
          Luckily, I was able to get a job in my major after graduating
        </span>
      </div>
    </div>
  )
}

const MemorableMilestone = () => {
  return (
    <Wrapper style="flex flex-col items-center justify-center min-h-screen px-2 md:px-4">
      <h2 className="text-center text-3xl font-extrabold md:text-4xl lg:text-5xl">
        Memorable Milestone
      </h2>
      <div className="mt-6 w-full">
        <GraduateOnTime />
        <GotAJob />
      </div>
    </Wrapper>
  )
}

export default MemorableMilestone
